function speakText() {
  // Get the text to be spoken.
  var text = document.querySelector(".firstpara").textContent;

  // Create a speech synthesis object.
  var speech = new SpeechSynthesisUtterance(text);

  // Set the voice of the speech synthesis object.
  speech.voice = speechSynthesis.getVoices()[0];

  // Speak the text.
  speechSynthesis.speak(speech);
}

// Create a button to speak the text.
var button = document.querySelector(".speakButton");
button.addEventListener("click", speakText);
