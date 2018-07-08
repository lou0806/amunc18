import {Input, Component, OnInit, OnDestroy, Output, EventEmitter} from '@angular/core';
import { CaucusComponent } from '../caucus/caucus.component';
import { LogService } from '../log.service';
import {PassSecondsService} from '../pass-seconds.service';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material'

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnDestroy {

  @Input() seconds: number;
  intervalId = 0;
  message = '';

  clearTimer() {
    clearInterval(this.intervalId);
  }

  ngOnInit() {
    /*this.start();*/
  }

  ngOnDestroy() {
    this.clearTimer();
  }

  start() {
    this.countDown();
  }

  stop() {
    this.clearTimer();
    this.message = `Holding at T-${this.seconds} seconds`;
  }

  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0) {
        this.message = 'TIME UP';
      } else {
        if (this.seconds < 0) {
          this.seconds = 10;
        } // reset
        this.message = `T-${this.seconds} seconds and counting`;
      }
    }, 1000);
  }
}
/*
  @Input() type: string;
  @Input() speakerSeconds: number;
  @Input() seconds: number;

  varSpeaker = this.speakerSeconds;

  constructor (
    private caucusComponent: CaucusComponent,
    private logService: LogService,
    private passService: PassSecondsService,
  ) {}

  intervalId = 0;
  intervalId2 = 0;
  message = '';

  clearTimer() {clearInterval(this.intervalId); }
  clearTimer2() {clearInterval(this.intervalId2); }

  ngOnInit() {/*this.start(); this.startSpeaker(); }
  /*ngOnDestroy() {this.clearTimer(); this.clearTimer2(); }

  start() {
    this.countDown();
  }

  stop() {
    this.clearTimer();
  }

  startSpeaker() {
    this.countDown();
    this.speakerCountDown();
  }

  stopSpeaker() {
    this.clearTimer2();
  }

  skipSpeaker() {
    this.caucusComponent.logTimer(this.varSpeaker);
    if (this.type === 'Speaker List') {
      this.caucusComponent.removeSpeakerTop();
    } else if (this.type === 'Moderated Caucus') {
      this.caucusComponent.removeCaucusTop();
    }
      // TODO: Log the speaker LIVE, ALSO NOT SURE HOW TO INTERACT WITH MOD CAUC
    this.speakerSeconds = this.varSpeaker;
  }

  // TODO HERE: skip to next speaker when speaker timer finishes, so remove top from array of speakers
  private speakerCountDown() {
    this.clearTimer2();
    this.varSpeaker = this.speakerSeconds;
    this.intervalId2 = window.setInterval(() => {
      this.speakerSeconds -= 1;
      if (this.speakerSeconds === 0) {
        this.message = 'Time up';
        this.caucusComponent.logTimer(this.varSpeaker);
        if (this.type = 'Speaker List') {
          this.caucusComponent.removeSpeakerTop();
        } else if (this.type = 'Moderated Caucus') {
          this.caucusComponent.removeCaucusTop();
        }
      } else if (this.speakerSeconds < 0) {
        this.message = ''; // TODO: show who is speaking now
        this.speakerSeconds = this.varSpeaker; // TODO: doesnt reset properly to original speakerSeconds
        this.clearTimer2();
      }
      this.passService.setSeconds(this.speakerSeconds);
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
        this.seconds = this.varSpeaker;
        this.clearTimer();
      }
      this.passService.setSeconds(this.seconds);
    }, 1000);
  }*/

