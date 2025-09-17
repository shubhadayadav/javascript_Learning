// Write code below 💖

let hour = 15;
if (hour <= 12) {
  console.log(`Good morning it's ${hour} o'clock`);
} else if (hour < 18 && hour >= 13) {
  console.log(`Its time to work now,its ${hour} o'clock`);
} else if (hour <= 19) {
  console.log(`Its time to do activity ${hour}`);
} else if (hour >= 20 && hour <= 22) {
  console.log(`its time to dinner ${hour}`);
} else {
  console.log(`its a sleeping time ${hour}`);
}
if (hour >= 24) {
  console.log(`New day start now`);
}
