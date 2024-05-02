// const abc = document.querySelector('.message').textContent;
// console.log(abc);
// document.querySelector('.message').textContent = '🎉 Correct answer!';
// document.querySelector('.number').textContent = 23;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').textContent = 13;

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displaymessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when the no is null
  if (!guess) {
    // document.querySelector('.message').textContent = ' ⛔ No Number!';
    displaymessage('⛔ No Number!');
  }

  // when the no is equal
  else if (guess === number) {
    // document.querySelector('.message').textContent = '🎉 Correct answer!';
    displaymessage('🎉 Correct answer!');
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // when the guess is wrong
  else if (guess !== number) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > number ? ' 📈 Too high!' : '📉 Too Low!';
      displaymessage(guess > number ? ' 📈 Too high!' : '📉 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥You lost the game.';
      displaymessage('💥You lost the game.');
      document.querySelector('.score').textContent = 0;
    }
  }
  // when the no is too high
  // else if (guess > number) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = ' 📈 Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥You lost the game.';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
  // when the no is too low
  // else if (guess < number) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = ' 📉 Too Low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥You lost the game.';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

// again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  // document.querySelector('.message').textContent = 'Start guessing';
  displaymessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
