import { AfterViewInit, ViewChild } from '@angular/core';
import { Component, Input } from '@angular/core';
import { TimerComponent } from '../timer/timer.component';
import { CheapTimerChildComponent } from '../cheap-timer-child/cheap-timer-child.component';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material'


@Component({
  selector: 'app-cheap-timer',
  templateUrl: './cheap-timer.component.html',
  styleUrls: ['./cheap-timer.component.css']
})

export class CheapTimerComponent {

  @Input() speakerSeconds: number;
  @Input() caucusSeconds: number;
  caucusTimeInt = 0;
  speakerTimeInt = 0;
  caucusTimeString: string;
  speakerTimeString: string;


  constructor(
    public dialogRef: MatDialogRef<CheapTimerComponent>,
  ) { }

  getTime(): number {
    const minutesRecorded = (<HTMLInputElement>document.getElementById('minutes')).value;
    const secondsRecorded = (<HTMLInputElement>document.getElementById('seconds')).value;
    this.caucusTimeInt = parseInt(minutesRecorded, 0) * 60 + parseInt(secondsRecorded, 0);
    this.caucusTimeString = '' + this.caucusTimeInt;
    return parseInt(minutesRecorded, 0) * 60 + parseInt(secondsRecorded, 0);
  } // TODO: Conditional Timer
    // TODO: Limits on time

  getSpeakerTime(): number {
    const minutesInput = (<HTMLInputElement>document.getElementById('speakerMinutes')).value;
    const secondsInput = (<HTMLInputElement>document.getElementById('speakerSeconds')).value;
    this.speakerTimeInt = parseInt(minutesInput, 0) * 60 + parseInt(secondsInput, 0)
    this.speakerTimeString = '' + this.speakerTimeInt;
    return parseInt(minutesInput, 0) * 60 + parseInt(secondsInput, 0);
  }

  submitSpeakerTime(time: number): number {
    return time;
  }

  submitTime(time: number): number {
    return time;
  }

  convertSeconds(time: number): string {
    const seconds = time % 60;
    const minutes = (time - seconds) / 60;
    let secondString = '';
    let minuteString = '';
    if (minutes < 10) {
      minuteString = '0' + minutes;
    } else {
      minuteString = '' + minutes;
    }
    if (seconds < 10) {
      secondString = '0' + seconds;
    } else {
      secondString = '' + seconds;
    }
    return minuteString + ':' + secondString;
  }
}
