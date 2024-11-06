const text_to_audio = async (text: string): void => {
  const utterance = new SpeechSynthesisUtterance(text);

  const voices = speechSynthesis.getVoices();
  utterance.voice = voices[0];

  speechSynthesis.speak(utterance);
};

const stop_text_audio = (): void => {
  speechSynthesis.cancel();
};

export { text_to_audio, stop_text_audio };
