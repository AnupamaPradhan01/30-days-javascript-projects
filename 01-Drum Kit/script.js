document.addEventListener("keypress", function (event) {
  sound(event.key);
  animation(event.key);
});
function sound(key) {
  switch (key) {
    case "a":
      // console.log("A is pressed");
      var sound1 = new Audio("music/clap.wav");
      sound1.play();
      break;
    case "s":
      // console.log("s is pressed");
      var sound2 = new Audio("music/hihat.wav");
      sound2.play();
      break;
    case "d":
      // console.log("d is pressed");
      var sound3 = new Audio("music/kick.wav");
      sound3.play();
      break;
    case "f":
      // console.log("f is pressed");
      var sound4 = new Audio("music/openhat.wav");
      sound4.play();
      break;
    case "g":
      // console.log("g is pressed");
      var sound5 = new Audio("music/boom.wav");
      sound5.play();
      break;
    case "h":
      // console.log("h is pressed");
      var sound6 = new Audio("music/ride.wav");
      sound6.play();
      break;
    case "j":
      // console.log("j is pressed");
      var sound7 = new Audio("music/snare.wav");
      sound7.play();
      break;
    case "k":
      // console.log("k is pressed");
      var sound8 = new Audio("music/tom.wav");
      sound8.play();
      break;
    case "l":
      // console.log("l is pressed");
      var sound9 = new Audio("music/tint.wav");
      sound9.play();
      break;
  }
}
function animation(currentkey) {
  let activebtn = document.querySelector("." + currentkey);
  activebtn.classList.add("animation");
  setTimeout(function () {
    activebtn.classList.remove("animation");
  }, 100);
}
