let speech = new SpeechSynthesisUtterance();
let voices = [];

let voiceSelect = document.querySelector('select');

// provides all available voices
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    voices.forEach((v, i) => {
        voiceSelect.options[i] = new Option(v.name, i)
    })
}

document.querySelector('button').addEventListener('click', () => {
    speech.text = document.querySelector('textarea').value;
    window.speechSynthesis.speak(speech);
});
