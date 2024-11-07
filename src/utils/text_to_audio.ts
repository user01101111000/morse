const text_to_audio = (text: string): void => {
  const utterance = new SpeechSynthesisUtterance(text);

  const voices = speechSynthesis.getVoices();
  utterance.voice = voices[0];

  speechSynthesis.speak(utterance);
};

export { text_to_audio };
