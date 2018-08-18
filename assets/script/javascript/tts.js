var ttsButton = document.getElementById('tts');

ttsButton.addEventListener('click', makeSpeech);

function makeSpeech(){
  var text = window.getSelection().toString();
  var tts = new SpeechSynthesisUtterance();
  tts.lang = "en";
  tts.text = text;
  speechSynthesis.speak(tts);
}
