// create date 24 hours from now, basically countdown from this time in the future

const countToDate = new Date().setDate(new Date().getDate() + 8);

// difference between dates
let previousTimeBetweenDates;
const currentDate = new Date();

setInterval(() => {
  const currentDate = new Date();
  // get seconds from calculation
  const timeBetweenDates = Math.ceil((countToDate - currentDate) / 1000);

  flipAllCards(timeBetweenDates);

  previousTimeBetweenDates = timeBetweenDates;
}, 400);

function flipAllCards(time) {
  const seconds = time % 60;
  // const minutes = Math.floor(time / 60) % 60;
  // const hours = Math.floor(time / 3600) % 24;
  // const days = Math.floor(time / 86400);

  // console.log(`D ${days} | H ${hours} | M ${minutes} | S ${seconds}`);
  console.log(`S ${seconds}`);

  const itemSeconds = document.querySelector('[data-seconds]');
  // const itemMinutes = document.querySelector('[data-minutes]');
  // const itemHours = document.querySelector('[data-hours]');
  // const itemDays = document.querySelector('[data-days]');

  flip(itemSeconds, seconds);
  // flip(itemMinutes, minutes);
  // flip(itemHours, hours);
  // flip(itemDays, days);
}

function flip(flipCard, newNumber) {
  const layerOffset = flipCard.querySelector('.layer-top');
  const layerCurrent = flipCard.querySelector('.layer-bottom');
  const flipCurrent = flipCard.querySelector('.flip-top');
  const flipOffset = flipCard.querySelector('.flip-bottom');

  const startNumber = parseInt(layerOffset.textContent);

  console.log(`new number: ${newNumber} || start number: ${startNumber}`);

  if (newNumber === startNumber) return;
  console.log('flip');

  flipCurrent.addEventListener('animationend', (e) => {
    flipCurrent.textContent = newNumber;
  });

  layerOffset.textContent = startNumber;

  layerOffset.textContent = newNumber - 1;
  layerCurrent.textContent = newNumber;
  flipCurrent.textContent = newNumber;
  flipOffset.textContent = newNumber - 1;

  // if (newNumber !== start)
}

const animationTrigger = document.querySelector(
  '.item[data-seconds] .layer-flip'
);

// // HOURS;
// const hourOffset = document.querySelectorAll('.hours ._offset');
// const hourCurrent = document.querySelectorAll('.hours ._current');

// // MINUTES;
// const minuteOffset = document.querySelectorAll('.minutes ._offset');
// const minuteCurrent = document.querySelectorAll('.minutes ._current');

// const minuteFlip = document.querySelector('.minutes .layer-flip');
// const minuteHide = document.querySelector('.minutes .flip-top');

// SECONDS;
const secondOffset = document.querySelectorAll('.seconds ._offset');
const secondCurrent = document.querySelectorAll('.seconds ._current');

function flipSeconds() {
  let seconds = new Date().getSeconds();
  let secondsOffset = seconds + 1;

  // if (seconds === 59) {
  //   flipMinutes();
  //   minuteFlip.style.animationPlayState = 'running';
  //   minuteHide.style.animationPlayState = 'running';
  // } else {
  //   minuteFlip.style.animationPlayState = 'paused';
  //   minuteHide.style.animationPlayState = 'paused';
  // }

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

// function flipMinutes() {
//   let minutes = new Date().getMinutes();
//   let minutesOffset = minutes + 1;
//   console.log(`minutes ${minutes}`);

//   minuteOffset.forEach((element) => {
//     element.innerHTML = minutesOffset;
//   });
//   minuteCurrent.forEach((element) => {
//     element.innerHTML = minutes;
//   });

//   if (minutes === 06) {
//     flipHours();
//   }
// }

// function flipHours() {
//   const hours = new Date().getHours();
//   let hoursOffset = hours + 1;
//   console.log(`hours ${hours}`);

//   hourOffset.forEach((element) => {
//     element.innerHTML = hoursOffset;
//   });
//   hourCurrent.forEach((element) => {
//     element.innerHTML = hours;
//   });
// }

animationTrigger.addEventListener('animationiteration', () => {
  flipSeconds();
});
