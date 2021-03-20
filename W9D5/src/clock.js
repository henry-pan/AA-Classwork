import { htmlGenerator } from "./warmup";
const clockElement = document.querySelector("#clock");

class Clock {
  constructor() {
    // 1. Create a Date object.
    const date = new Date();
    // 2. Store the hours, minutes, and seconds.
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
    // 3. Call printTime.
    this.printTime();
    // 4. Schedule the tick at 1 second intervals.
    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    let formattedHours = this.hours%12 <= 9 ? `0${this.hours%12}` : this.hours%12;
    let formattedMins = this.minutes <= 9 ? `0${this.minutes}` : this.minutes;
    let formattedSecs = this.seconds <= 9 ? `0${this.seconds}` : this.seconds;
    let str = `${formattedHours}:${formattedMins}:${formattedSecs}`;
    htmlGenerator(str, clockElement);
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
    this.seconds += 1;
    if (this.seconds === 60) {
      this.seconds = 0;
      this.minutes += 1;
    }
    if (this.minutes === 60) {
      this.minutes = 0;
      this.hours += 1;
    }
    if (this.hours === 24) {
      this.hours = 0;
    }

    this.printTime();
  }
}

const clock = new Clock();
