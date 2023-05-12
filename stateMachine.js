class StateMachine {
  constructor(
    originalTextField,
    translatedTextField,
    dipththongTextField,
    wordAnswerField,
    dipththongAnswerField,
    playButton,
    wordsRemainingCounter,
    data
  ) {
    this.originalTextField = originalTextField;
    this.translatedTextField = translatedTextField;
    this.dipththongTextField = dipththongTextField;
    this.wordAnswerField = wordAnswerField;
    this.dipththongAnswerField = dipththongAnswerField;
    this.playButton = playButton;
    this.remainingWords = data;
    this.usedWords = [];
    this.currentWord = {};
    this.wordsRemainingCounter = wordsRemainingCounter;
  }

  startRound() {
    const index = Math.floor(Math.random() * this.remainingWords.length);
    const pickedWord = this.remainingWords.splice(index, 1)[0];
    this.currentWord = pickedWord;
    this.wordsRemainingCounter.innerText = `${this.remainingWords.length} words remaining`
    this.originalTextField.classList.add('nullOpacity');
    this.translatedTextField.classList.add('nullOpacity');
    this.dipththongTextField.classList.add('nullOpacity');
    this.wordAnswerField.classList.remove('greenBackground');
    this.wordAnswerField.classList.remove('redBackground');
    this.dipththongAnswerField.classList.remove('greenBackground');
    this.dipththongAnswerField.classList.remove('redBackground');
    this.originalTextField.innerText = pickedWord.original;
    this.translatedTextField.innerText = `Translation: "${pickedWord.translation}"`;
    this.dipththongTextField.innerText = `Diphthong: "${pickedWord.diphthong}"`;
    const audioPath = new Audio(pickedWord.audioFile);

    playButton.addEventListener('click', (e) => {
      audioPath.play();
    });
  }

  check(inputText, inputDiphthong) {
    this.wordAnswerField.classList.remove('greenBackground');
    this.wordAnswerField.classList.remove('redBackground');
    this.dipththongAnswerField.classList.remove('greenBackground');
    this.dipththongAnswerField.classList.remove('redBackground');
    this.originalTextField.classList.remove('nullOpacity');
    this.translatedTextField.classList.remove('nullOpacity');
    this.dipththongTextField.classList.remove('nullOpacity');
    const correctAnswer = this.currentWord.original.toLowerCase();
    const correctDiphthong = this.currentWord.diphthong.toLowerCase();
    const givenAnswer = inputText.toLowerCase();
    const givenDiphthong = inputDiphthong.toLowerCase();
    this.wordAnswerField.classList.add(
      correctAnswer === givenAnswer ? 'greenBackground' : 'redBackground'
    );
    this.dipththongAnswerField.classList.add(
      correctDiphthong === givenDiphthong ? 'greenBackground' : 'redBackground'
    );

    if (correctAnswer === givenAnswer && correctDiphthong === givenDiphthong) {
      this.usedWords.add(this.currentWord);
    }
  }
}
