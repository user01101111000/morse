const FREQUENCY = 440.0;
const DOT_TIME = 150;
const DASH_TIME = DOT_TIME * 3;

let note_context;
let note_node;
let gain_node;
let audioContextInitialized: boolean = false;
let playing: boolean = false;

function initializeAudioContext() {
  note_context = new AudioContext();
  note_node = note_context.createOscillator();
  gain_node = note_context.createGain();
  note_node.frequency.value = FREQUENCY;
  gain_node.gain.value = 0;
  note_node.connect(gain_node);
  gain_node.connect(note_context.destination);
  note_node.start();
  audioContextInitialized = true;
}

function startNotePlaying() {
  if (audioContextInitialized) gain_node!.gain.setTargetAtTime(0.1, 0, 0.001);
}

function stopNotePlaying() {
  if (audioContextInitialized) gain_node!.gain.setTargetAtTime(0, 0, 0.001);
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function playDash() {
  startNotePlaying();
  await sleep(DASH_TIME);
  stopNotePlaying();
}

async function playDot() {
  startNotePlaying();
  await sleep(DOT_TIME);
  stopNotePlaying();
}

async function play_morse_code(letter: string) {
  if (!audioContextInitialized) initializeAudioContext();

  if (!playing) {
    playing = true;
    for (let i = 0; i < letter.length; i++) {
      if (letter[i] == "-") {
        await playDash();
      } else if (letter[i] == ".") {
        await playDot();
      }
      await sleep(DOT_TIME);
    }
    playing = false;
  }
}

export { play_morse_code };
