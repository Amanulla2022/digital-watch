const dayOfWeekElement = document.getElementById("day-of-week");
const hoursElement = document.getElementById("hour");
const minutesElement = document.getElementById("minute");
const secondsElement = document.getElementById("second");
const milisecondsElement = document.getElementById("milisecond");
const greetingElement = document.getElementById("greet");
const ampmEl = document.getElementById("am-pm");
const backgroundImages = document.getElementById("background-images");
const morningImage = document.getElementById("morning-image");
const afternoonImage = document.getElementById("afternoon-image");
const eveningImage = document.getElementById("evening-image");
const nightImage = document.getElementById("night-image");

function getDayOfWeek(dayIndex) {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return daysOfWeek[dayIndex];
}

function myClock() {
  const currentTime = new Date();
  let hour = currentTime.getHours();
  let minute = currentTime.getMinutes();
  let second = currentTime.getSeconds();
  let milisecond = currentTime.getMilliseconds();
  let dayOfWeek = getDayOfWeek(currentTime.getDay());
  let greeting = getGreeting(hour);

  updateBackgroundImage(hour);

  let ampm = hour >= 12 ? "PM" : "AM";

  hour = hour % 12 || 12;

  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;
  milisecond = milisecond < 10 ? "0" + milisecond : milisecond;

  hoursElement.innerText = hour;
  minutesElement.innerText = minute;
  secondsElement.innerText = second;
  milisecondsElement.innerText = milisecond;
  dayOfWeekElement.innerText = `It's ${dayOfWeek}`;
  greetingElement.innerText = `Hey ${greeting} !!!`;
  ampmEl.innerText = ampm;

  setTimeout(myClock, 10);
}

function getGreeting(hour) {
  if (hour >= 5 && hour < 12) {
    return "Good Morning";
  } else if (hour >= 12 && hour < 18) {
    return "Good Afternoon";
  } else if (hour >= 18 && hour < 24) {
    return "Good Evening";
  } else {
    return "Good Night";
  }
}

function updateBackgroundImage(hour) {
  morningImage.style.display = hour >= 5 && hour < 12 ? "block" : "none";
  afternoonImage.style.display = hour >= 12 && hour < 18 ? "block" : "none";
  eveningImage.style.display = hour >= 18 && hour < 24 ? "block" : "none";
  nightImage.style.display =
    (hour >= 0 && hour < 5) || hour === 24 ? "block" : "none";
}

myClock();
