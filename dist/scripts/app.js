// current date

const currentDate = new Date();

// date in the future to count to

const futureDays = 8;
const futureHours = 23;
const futureMinutes = 55;
const futureSeconds = 41;

// construct future data

const futureDate = new Date();
futureDate.setDate(currentDate.getDate() + futureDays);
futureDate.setHours(currentDate.getHours() + futureHours);
futureDate.setMinutes(currentDate.getMinutes() + futureMinutes);
futureDate.setSeconds(currentDate.getSeconds() + futureSeconds);

let previousTimeBetweenDates,
  previousDay = futureDays,
  previousHour = futureHours,
  previousMinute = futureMinutes,
  previousSecond = futureSeconds;

// function setInitialValues() {
//   const timeDifference = futureDate - currentDate;

//   const seconds = Math.floor((timeDifference / 1000) % 60);
//   const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
//   const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
//   const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

//   animateFlipCard(seconds, 'data-seconds');
//   animateFlipCard(minutes, 'data-minutes');
//   animateFlipCard(hours, 'data-hours');
//   animateFlipCard(days, 'data-days');
// }

// setInitialValues();

function calculateTime() {
  const currentDate = new Date();
  const timeDifference = futureDate - currentDate;

  // const milliseconds = Math.ceil(timeDifference / 1000);
  const seconds = Math.floor((timeDifference / 1000) % 60);
  const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
  const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  // console.log(`D = ${days} | H = ${hours} | M = ${minutes} | S = ${seconds}`);

  if (seconds !== previousSecond) {
    previousSecond = seconds;
    animateFlipCard(previousSecond, 'data-seconds');
  }

  if (minutes !== previousMinute) {
    previousMinute = minutes;
    animateFlipCard(previousMinute, 'data-minutes');
  }

  if (hours !== previousHour) {
    previousHour = hours;
    animateFlipCard(previousHour, 'data-hours');
  }

  if (days !== previousDay) {
    previousDay = days;
    animateFlipCard(previousDay, 'data-days');
  }
}

setInterval(calculateTime, 150);

function animateFlipCard(time, elem) {
  // declare container element do append data to

  const container = document.querySelector(`[${elem}]`);

  // get UI elements to append

  const layerFlip = container.querySelector('.layer-flip');
  const layerCurrent = container.querySelector('.layer._current');
  const flipCurrent = container.querySelector('.flip._current');
  const layerOffset = container.querySelector('.layer._offset');
  const flipOffset = container.querySelector('.flip._offset');

  let timeOffset;

  if (time === 0) {
    timeOffset = 59;
  } else {
    timeOffset = time - 1;
  }

  if (time < 10) {
    time = `0${time}`;
  }

  if (timeOffset < 10) {
    timeOffset = `0${timeOffset}`;
  }

  layerFlip.classList.add('flipping');

  layerFlip.addEventListener('animationend', onAnimationEnd, { once: true });

  function onAnimationEnd() {
    layerCurrent.textContent = time;
    flipCurrent.textContent = time;

    layerOffset.textContent = timeOffset;
    flipOffset.textContent = timeOffset;

    layerFlip.classList.remove('flipping');
  }
}
