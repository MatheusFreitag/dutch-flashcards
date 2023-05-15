const SOURCE_OF_WORDS = audioLibrary['diphthongsVocabulary'];

const initialize = (data) => {
  const originalTextField = document.getElementById('originalText');
  const translatedTextField = document.getElementById('translatedText');
  const dipththongTextField = document.getElementById('diphthongText');
  const playButton = document.getElementById('playButton');
  const checkButton = document.getElementById('checkButton');
  const nextButton = document.getElementById('nextButton');
  const wordAnswerField = document.getElementById('wordAnswerInput');
  const dipththongAnswerField = document.getElementById(
    'diphthongsAnswerInput'
  );
  const wordsRemainingCounter = document.getElementById('wordsRemaining');

  const stateMachine = new StateMachine(
    originalTextField,
    translatedTextField,
    dipththongTextField,
    wordAnswerField,
    dipththongAnswerField,
    playButton,
    wordsRemainingCounter,
    data
  );

  playButton.addEventListener('click', (e) => {
    stateMachine.playAudio();
  });

  stateMachine.startRound();

  checkButton.addEventListener('click', () => {
    const inputText = document.getElementById('wordAnswerInput').value;
    const inputDiphthong = document.getElementById(
      'diphthongsAnswerInput'
    ).value;
    stateMachine.check(inputText, inputDiphthong);
  });

  nextButton.addEventListener('click', () => {
    stateMachine.startRound();
  });
};

initialize(SOURCE_OF_WORDS);
