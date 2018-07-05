import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  logTimer: number[] = [];
  logSpeaker: string[] = [];
  logMotion: string[] = [];
  logResult: string[] = []; // TODO: updateLogResult and clearLogResult, also implementation of this

  updateLogTimer(input: number) {
    this.logTimer.push(input); // TODO: Input will be a string in format TIMER BY MEMBER STATE
  }

  updateSpeakersLog(input: string) {
    this.logSpeaker.push(input);
  }

  updateMotionLog(input: string) {
    this.logMotion.push(input);
  }

  clearLogTimer() {
    this.logTimer = [];
  }

  clearSpeakersLog() {
    this.logSpeaker = [];
  }

  clearMotionsLog() {
    this.logMotion = [];
  }
}
