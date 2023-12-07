let speech = new SpeechSynthesisUtterance();

// An array of available voices
let voices = [];

// the select element
let voiceSelect = document.querySelector('select');

// provides all available voices (event fired when voices are gathered)
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    // default to the first voice
    speech.voice = voices[0];

    // add each voice as an option in the select
    voices.forEach((v, i) => {
        voiceSelect.options[i] = new Option(v.name, i)
    })
}

// Change the active voice each time the select value is changed
voiceSelect.addEventListener('change', () => {
    speech.voice = voices[voiceSelect.value];
})

// speaks the textaera content
document.querySelector('button').addEventListener('click', () => {
    speech.text = document.querySelector('textarea').value;
    window.speechSynthesis.speak(speech);
});
