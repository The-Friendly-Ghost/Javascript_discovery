'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let done = false;
const messageDoc = document.querySelector('.message');
const bodyDoc = document.querySelector('body');

// Klik-actie op check knop
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (score > 0 && !done) {
    if (!guess) {
      messageDoc.textContent = 'No Number!';
    } else if (guess === number) {
      messageDoc.textContent = 'Correct!';
      bodyDoc.style.backgroundColor = 'green';
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
      done = true;
      document.querySelector('.check').textContent = 'Again';
    } else {
    	messageDoc.textContent = guess > number ? 'Too high!' : 'Too low!';
      score--;
    }
    document.querySelector('.score').textContent = score;
    if (score === 0) {
      messageDoc.textContent = 'You Lose!';
      bodyDoc.style.backgroundColor = 'red';
    }
  } else if (score === 0 || done) {
    bodyDoc.style.backgroundColor = '#222';
    messageDoc.textContent = 'Start Guessing...';
    score = 20;
    done = false;
    document.querySelector('.score').textContent = score;
    document.querySelector('.check').textContent = 'Check!';
    number = Math.trunc(Math.random() * 20) + 1;
  }
});
