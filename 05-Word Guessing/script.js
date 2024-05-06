// document.querySelector('.guess-letter').textContent = 'Java';
document.querySelector('.hint').textContent = 'programming language';
// document.querySelector('.message').textContent = '🎉 correct answer.';
// document.querySelector('.score').textContent = 13;
// document.querySelector('.highscore').textContent = 20;

let score = 20;
let highscore = 0;
const words = ['apple', 'java', 'money', 'egg', 'kick', 'laptop', 'angular'];
let word = words[Math.floor(Math.random() * words.length)];
console.log(word);
let strarray = word.split('');
console.log(strarray);
let i, j, k;
for (i = 0; i < strarray.length; i++) {
  j = Math.floor(Math.random() * i);
  k = strarray[i];
  strarray[i] = strarray[j];
  strarray[j] = k;
}
let scrambleWord = strarray.join('');

document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.box').value;
  console.log(guess);

  // when the no is null
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Word!';
  } else if (guess === word) {
    document.querySelector('.message').textContent = '🎉 correct answer.';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess != word) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        '🥺Incorrect answer!Try Again.';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game 💥.';
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.guess-letter').textContent = scrambleWord;

// again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  let word = words[Math.floor(Math.random() * words.length)];
  console.log(word);
  let strarray = word.split('');
  console.log(strarray);
  let i, j, k;
  for (i = 0; i < strarray.length; i++) {
    j = Math.floor(Math.random() * i);
    k = strarray[i];
    strarray[i] = strarray[j];
    strarray[j] = k;
  }
  let scrambleWord = strarray.join('');
  document.querySelector('.guess-letter').textContent = scrambleWord;
  document.querySelector('.box').value = '';
  document.querySelector('.message').textContent = 'Starting the Game..';
  document.querySelector('.score').textContent = score;
});
