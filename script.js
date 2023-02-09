'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;
let score = 20;

function displayContent(classname, message) {
  document.querySelector(classname).textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);
  if (!guessNumber) displayContent('.message', '⚠️ No Number!');
  //Check invalid number.
  else if (guessNumber < 1 || guessNumber > 20)
    displayContent('.message', '⚠️ Invalid Number!');
  //Right number.
  else if (guessNumber === secretNumber) {
    if (score > highScore) {
      highScore = score;
      displayContent('.highscore', highScore);
    }
    displayContent('.number', secretNumber);
    displayContent('.message', '🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  }
  //Guess number not right.
  else if (guessNumber !== secretNumber) {
    if (score > 1) {
      displayContent(
        '.message',
        guessNumber > secretNumber ? '👆 Too High!' : '👇 Too Low!'
      );
      score--;
      displayContent('.score', score);
    } else {
      displayContent('.message', '💥 You lost the game!');
      displayContent('.score', 0);
    }
  }
});

//Reset the game.
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayContent('.message', 'Start guessing...');
  displayContent('.number', '?');
  displayContent('.score', score);
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
