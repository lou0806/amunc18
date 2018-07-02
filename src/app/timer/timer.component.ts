import { Input, Component, OnInit, OnDestroy, Output } from '@angular/core';
import { CaucusComponent } from '../caucus/caucus.component';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnDestroy {

  @Input() speakerSeconds: number;
  @Input() seconds: number;

  varSpeaker: number;

  constructor (private caucusComponent: CaucusComponent) {}

  intervalId = 0;
  intervalId2 = 0;
  message = '';

  clearTimer() {clearInterval(this.intervalId); }
  clearTimer2() {clearInterval(this.intervalId2); }

  ngOnInit() {/*this.start(); this.startSpeaker(); */}
  ngOnDestroy() {this.clearTimer(); this.clearTimer2(); }

  start() {
    this.countDown();
  }

  stop() {
    this.clearTimer();
  }

  startSpeaker() {
    this.speakerCountDown();
  }

  stopSpeaker() {
    this.clearTimer2();
  }

  // TODO HERE: skip to next speaker when speaker timer finishes, so remove top from array of speakers
  private speakerCountDown() {
    this.clearTimer2();
    this.varSpeaker = this.speakerSeconds;
    this.intervalId2 = window.setInterval(() => {
      this.speakerSeconds -= 1;
      if (this.speakerSeconds === 0) {
        this.message = 'Time up';
        this.caucusComponent.removeSpeakerTop();
      } else if (this.speakerSeconds < 0) {
        this.message = '';
        this.clearTimer2();
        this.speakerSeconds = this.varSpeaker; // TODO: This resets, probably don't want (fixed it?)
      }
    }, 1000);
  }

  private countDown() {
    this.clearTimer();
    this.varSpeaker = this.seconds;
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0) {
        this.message = 'Motion Time Up';
      } else if (this.seconds < 0) {
        this.message = '';
        this.clearTimer();
        this.seconds = this.varSpeaker;
      }
    }, 1000);
  }
}
