let note_context: AudioContext | null = null;
let note_node: OscillatorNode | null = null;
let gain_node: GainNode | null = null;
let audioContextInitialized: boolean = false;

function initializeAudioContext(fr = 440) {
  if (!audioContextInitialized) {
    note_context = new AudioContext();
    note_node = note_context.createOscillator();
    gain_node = note_context.createGain();
    note_node.frequency.value = fr;
    gain_node.gain.value = 0;
    note_node.connect(gain_node);
    gain_node.connect(note_context.destination);
    note_node.start();
    audioContextInitialized = true;
  }
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

async function playDash(sp: number) {
  startNotePlaying();
  await sleep(sp * 3);
  stopNotePlaying();
}

async function playDot(sp: number) {
  startNotePlaying();
  await sleep(sp);
  stopNotePlaying();
}

async function play_morse_code(letter: string, fr: number, sp: number) {
  initializeAudioContext(fr);

  for (let i = 0; i < letter.length; i++) {
    if (letter[i] == "-") {
      await playDash(sp);
    } else if (letter[i] == ".") {
      await playDot(sp);
    }
    await sleep(sp);
  }

  note_context!.close();
  audioContextInitialized = false;
}

export { play_morse_code };
