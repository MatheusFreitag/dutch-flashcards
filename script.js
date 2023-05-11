const SOURCE_OF_WORDS =
  'https://raw.githubusercontent.com/MatheusFreitag/dutch-flashcards/main/library.json';

const dataHandler = (data) => {
  const originalText = document.getElementById('originalText');
  const translatedText = document.getElementById('translatedText');
  const dipththongText = document.getElementById('diphthongText');
  const playButton = document.getElementById('playButton');
  const audio = new Audio(data[29].audioFile);
  originalText.innerText = data[29].original;
  translatedText.innerText = `Translation: "${data[29].translation}"`;
  dipththongText.innerText = `Diphthong: "${data[29].diphthong}"`;
  playButton.addEventListener('click', (e) => {
    audio.play();
  });
};

fetch(SOURCE_OF_WORDS)
  .then((response) => response.json())
  .then((data) => {
    // Store the JSON data in a variable
    dataHandler(data);
  })
  .catch((error) => {
    console.error(error);
  });
