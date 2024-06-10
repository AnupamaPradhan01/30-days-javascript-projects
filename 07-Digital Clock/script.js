function displayTime() {
  var dateTime = new Date();
  var h = dateTime.getHours();
  var m = dateTime.getMinutes();
  var s = dateTime.getSeconds();
  var session = document.getElementById("session");
  if (h >= 12) {
    session.innerHTML = "PM";
  } else {
    session.innerHTML = "AM";
  }
  if (h > 12) {
    h = h - 12;
  }
  document.getElementById("hours").innerHTML = h;
  document.getElementById("minutes").innerHTML = m;
  document.getElementById("seconds").innerHTML = s;
}
setInterval(displayTime, 1000);
