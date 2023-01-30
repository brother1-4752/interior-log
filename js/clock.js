const clockText = document.querySelector(".header__clock-time");

function clock() {
  let currentDate = new Date();

  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  let seconds = currentDate.getSeconds();

  let cur_hours = hours < 10 ? `0${hours}` : hours;
  let cur_minutes = minutes < 10 ? `0${minutes}` : minutes;
  let cur_seconds = seconds < 10 ? `0${seconds}` : seconds;
  clockText.innerHTML = `${cur_hours}:${cur_minutes}:${cur_seconds}`;
}

setInterval(clock, 1000);
