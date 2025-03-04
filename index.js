// Text-to-Speech Functionality
const speakButton = document.getElementById('speak-button');
const textInput = document.getElementById('text-input');

speakButton.addEventListener('click', () => {
  const text = textInput.value;
  if (text) {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  } else {
    alert('Please enter some text!');
  }
});