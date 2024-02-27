'use strict';

// We use the document.querySelector to select the classes from the html , in order to render them in the website

// Here we are selecting the message , number , score and guess classes and we are changing there contents and also logging the result in the console

/*
document.querySelector('.message').textContent = 'Hello World';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 12;
console.log(document.querySelector('.number').textContent);

document.querySelector('.score').textContent = 23;
console.log(document.querySelector('.score').textContent);

document.querySelector('.guess').value = 43;
console.log(document.querySelector('.guess').value);

*/

// Now lets learn about the clicking events
// Like when ever i click on the check button the result should
// come in the console.log and other fileds like score , highscore should get updated and Start guessing should show us like weather the guessed number is too low or too high or you won

// document.querySelector('.message').textContent = 'Hello World'

let secretNumner = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '🤦‍♂️  No Input';
  } else if (guess === secretNumner) {
    document.querySelector('.message').textContent = '🏆 Congrats you won';
    document.querySelector('.number').textContent = secretNumner;
    document.querySelector('body').style.backgroundColor = '#60B347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }
  } else if (guess > secretNumner) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😶‍🌫️ You lost the game!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'Red';
    }
  } else if (guess < secretNumner) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '☠️ You lost the game';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'Red';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumner = Math.floor(Math.random() * 20 + 1);

  document.querySelector('.message').textContent = '🙈 Start Guessing';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
