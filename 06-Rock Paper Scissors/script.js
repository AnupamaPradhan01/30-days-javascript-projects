let youimg = document.querySelector('.you-img img');
let compimg = document.querySelector('.comp-img img');
const select = document.querySelectorAll('.select-img img');
let scoreyou = 0;
let scorecomp = 0;
// paper.addEventListener('click', function () {
//   const Imagesrc = paper.src;
//   console.log(Imagesrc);
//   youimg.src = Imagesrc;

//   const choice = Math.trunc(Math.random() * 3);
//   let compImages = ['paper1.png', 'rock1.png', 'scissor1.png'];
//   compimg.src = compImages[choice];
// });
// rock.addEventListener('click', function () {
//   console.log('the rock is on');
//   const Imagesrc = rock.src;
//   console.log(Imagesrc);
//   youimg.src = Imagesrc;
//   const choice = Math.trunc(Math.random() * 3);
//   let compImages = ['paper1.png', 'rock1.png', 'scissor1.png'];
//   compimg.src = compImages[choice];
// });
// scissors.addEventListener('click', function () {
//   console.log('the scissors is on');
//   const Imagesrc = scissors.src;
//   console.log(Imagesrc);
//   youimg.src = Imagesrc;
//   const choice = Math.trunc(Math.random() * 3);
//   let compImages = ['paper1.png', 'rock1.png', 'scissor1.png'];
//   compimg.src = compImages[choice];
// });

// loop through each selection image
select.forEach((image, index) => {
  image.addEventListener('click', function () {
    let Imagesrc = image.src;
    youimg.src = Imagesrc;
    let choice = Math.trunc(Math.random() * 3);
    let compImages = ['rock1.png', 'paper1.png', 'scissor1.png'];
    compimg.src = compImages[choice];
    // assgin value to the computer choice
    let compValue = ['R', 'P', 'S'][choice];
    // assign value to the user choice
    let youValue = ['P', 'R', 'S'][index];
    // all possible outcomes
    let outcomes = {
      RR: 'Draw',
      RP: 'Comp',
      RS: 'User',
      PP: 'Draw',
      PR: 'Comp',
      PS: 'Comp',
      SS: 'Draw',
      SR: 'Comp',
      SP: 'User',
    };
    // match the outcome of computer and user
    let outComes = outcomes[youValue + compValue];
    if (outComes == 'User') {
      document.querySelector('.sub-heading').textContent = '🎉 You won!!!';
      scoreyou++;
      document.querySelector('.score-you').textContent = scoreyou;
    } else if (outComes == 'Comp') {
      document.querySelector('.sub-heading').textContent = '🎊 Computer won!!!';
      scorecomp++;
      document.querySelector('.score-comp').textContent = scorecomp;
    } else {
      document.querySelector('.sub-heading').textContent = `🙃 It's a tie!!!`;
    }
  });
});
