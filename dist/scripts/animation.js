const animationTrigger = document.querySelector('.seconds .layer-flip');

// HOURS
const hourOffset = document.querySelectorAll('.hours ._offset');
const hourCurrent = document.querySelectorAll('.hours ._current');

// MINUTES
const minuteOffset = document.querySelectorAll('.minutes ._offset');
const minuteCurrent = document.querySelectorAll('.minutes ._current');

const minuteFlip = document.querySelector('.minutes .layer-flip');
const minuteHide = document.querySelector('.minutes .flip-top');

// SECONDS
const secondOffset = document.querySelectorAll('.seconds ._offset');
const secondCurrent = document.querySelectorAll('.seconds ._current');

function flipSeconds() {
  let seconds = new Date().getSeconds();
  let secondsOffset = seconds + 1;

  if (seconds === 59) {
    flipMinutes();
    minuteFlip.style.animationPlayState = 'running';
    minuteHide.style.animationPlayState = 'running';
  } else {
    minuteFlip.style.animationPlayState = 'paused';
    minuteHide.style.animationPlayState = 'paused';
  }

  // if _offset is + operator then 59 => 0, is _offset is - operator then 00 => 59
  if (seconds === 59) {
    secondsOffset = 0;
  }

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  if (secondsOffset < 10) {
    secondsOffset = `0${secondsOffset}`;
  }

  // console.log(`seconds ${seconds}`);

  secondOffset.forEach((element) => {
    element.innerHTML = secondsOffset;
  });
  secondCurrent.forEach((element) => {
    element.innerHTML = seconds;
  });
}

function flipMinutes() {
  let minutes = new Date().getMinutes();
  let minutesOffset = minutes + 1;
  console.log(`minutes ${minutes}`);

  minuteOffset.forEach((element) => {
    element.innerHTML = minutesOffset;
  });
  minuteCurrent.forEach((element) => {
    element.innerHTML = minutes;
  });

  if (minutes === 06) {
    flipHours();
  }
}

function flipHours() {
  const hours = new Date().getHours();
  let hoursOffset = hours + 1;
  console.log(`hours ${hours}`);

  hourOffset.forEach((element) => {
    element.innerHTML = hoursOffset;
  });
  hourCurrent.forEach((element) => {
    element.innerHTML = hours;
  });
}

animationTrigger.addEventListener('animationiteration', () => {
  flipSeconds();
});
