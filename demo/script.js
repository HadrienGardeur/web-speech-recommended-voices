let voices = speechSynthesis.getVoices();
const languageSelect = document.getElementById('language-select');

languageSelect.addEventListener('change', async function() {

  const defaultOption = document.getElementById("default-language-select");
  if (defaultOption) {
    defaultOption.remove();
  }

  const selectedLanguage = languageSelect.value;
  const jsonData = await loadJSONData("../json/"+selectedLanguage+".json");

  const defaultText = document.getElementById('text-to-read');
  defaultText.value = jsonData.testUtterance

  const availableVoices = filterAvailableVoices(jsonData);
  const voiceDropdownHTML = generateVoiceDropdownHTML(availableVoices);
  document.getElementById('voice-select').outerHTML = voiceDropdownHTML;
});

document.getElementById('read-button').addEventListener('click', readTextWithSelectedVoice);

async function loadJSONData(url) {
  try {
    const response = await fetch(url);
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error('Error loading JSON data:', error);
    return null;
  }
}

function filterAvailableVoices(jsonData) {
  if (!jsonData) return [];

  const availableVoices = [];
  const voices = speechSynthesis.getVoices();

  jsonData.voices.forEach(
    function(voice) {
      if (voices.some(apiVoice => apiVoice.name === voice.name)) {
        availableVoices.push(voice);
      }
      else {
        if (voice.altNames) {
          voice.altNames.forEach(
            function(altName) {
              if (voices.some(apiVoice => apiVoice.name === altName)) {
                voice.name = altName;
                availableVoices.push(voice);
              }
            }
            )
        }
      }
    }
    );

  return availableVoices;
}

function generateVoiceDropdownHTML(jsonData) {
  if (!jsonData) return '';

  const voiceSelect = document.createElement('select');
  voiceSelect.id = 'voice-select';

  (jsonData || []).forEach(function(voice) {
    const voiceOption = document.createElement('option');
    voiceOption.value = voice.name;
    voiceOption.textContent = voice.label;
    voiceSelect.appendChild(voiceOption);
  });

  return voiceSelect.outerHTML;
}

function readTextWithSelectedVoice() {
  const textToRead = document.getElementById('text-to-read').value;
  const selectedVoice = document.getElementById('voice-select').value;
  const voices = window.speechSynthesis.getVoices();

  if (!textToRead || !selectedVoice) return;

  const utterance = new SpeechSynthesisUtterance();
  utterance.text = textToRead;
  
  for (const voice of voices) {
    if (voice.name === selectedVoice) {
      utterance.voice = voice;
      utterance.lang = voice.lang;
      break;
    }
  }

  speechSynthesis.speak(utterance);
}