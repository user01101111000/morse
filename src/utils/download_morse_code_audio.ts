function createWavFile(letter: string, fr: number, sp: number) {
  const sampleRate = 44100;
  const dotDuration = sp / 1000;
  const dashDuration = dotDuration * 3;
  const silenceDuration = dotDuration;

  const totalDuration =
    letter.length * 1.5 * (dotDuration + silenceDuration) + silenceDuration * 2;
  const bufferLength = Math.ceil(sampleRate * totalDuration);
  const audioBuffer = new Float32Array(bufferLength);

  let bufferPos = 0;

  function addTone(duration: number) {
    const freq = (2 * Math.PI * fr) / sampleRate;
    const length = Math.floor(duration * sampleRate);
    for (let i = 0; i < length; i++) {
      audioBuffer[bufferPos++] = Math.sin(i * freq);
    }
  }

  function addSilence(duration: number) {
    const length = Math.floor(duration * sampleRate);
    bufferPos += length;
  }

  for (let i = 0; i < letter.length; i++) {
    if (letter[i] === "-") {
      addTone(dashDuration);
    } else if (letter[i] === ".") {
      addTone(dotDuration);
    } else if (letter[i] === " ") {
      addSilence(silenceDuration);
    }
    addSilence(silenceDuration);
  }

  addSilence(silenceDuration);

  const wavData = encodeWAV(audioBuffer, sampleRate);
  const blob = new Blob([wavData], { type: "audio/wav" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.style.display = "none";
  a.href = url;
  a.download = "morse_code.wav";
  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(url);
}

function encodeWAV(samples: Float32Array, sampleRate: number) {
  const buffer = new ArrayBuffer(44 + samples.length * 2);
  const view = new DataView(buffer);

  writeString(view, 0, "RIFF");
  view.setUint32(4, 36 + samples.length * 2, true);
  writeString(view, 8, "WAVE");
  writeString(view, 12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  writeString(view, 36, "data");
  view.setUint32(40, samples.length * 2, true);

  let offset = 44;
  for (let i = 0; i < samples.length; i++) {
    const s = Math.max(-1, Math.min(1, samples[i]));
    view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7fff, true);
    offset += 2;
  }

  return buffer;
}

function writeString(view: DataView, offset: number, string: string) {
  for (let i = 0; i < string.length; i++) {
    view.setUint8(offset + i, string.charCodeAt(i));
  }
}

function download_morse_code(letter: string, fr: number, sp: number) {
  createWavFile(letter, fr, sp);
}

export { download_morse_code };
