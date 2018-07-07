import {AfterViewInit, EventEmitter, ViewChild} from '@angular/core';
import { Component, Inject } from '@angular/core';
import { TimerComponent } from '../timer/timer.component';
import { Input, Output } from '@angular/core';
import { LogService } from '../log.service';
import {DialogPosition, MatDialogConfig, MatTabsModule} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MotionsComponent} from '../motions/motions.component';
import {CaucusComponent} from '../caucus/caucus.component';

//// View Child version
@Component({
  selector: 'app-timer-parent-vc',
  templateUrl: './timer-parent.component.html',
})

export class TimerParentComponent implements AfterViewInit {

  @Input() type: string;
  @ViewChild(TimerComponent)
  private timerComponent: TimerComponent;
  matTopic: string;

  constructor(
    public dialog: MatDialog,
    private caucusComponent: CaucusComponent,
  ) {}

  speakerSeconds() {return 0;}
  seconds() { return 0; }

  ngAfterViewInit() {
    // Redefine `seconds()` to get from the `CountdownTimerComponent.seconds` ...
    // but wait a tick first to avoid one-time devMode
    // unidirectional-data-flow-violation error
    setTimeout(() => this.speakerSeconds = () => this.timerComponent.speakerSeconds, 0);
    setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0);
  }

  start() { this.timerComponent.start(); }
  stop() { this.timerComponent.stop(); }

  startSpeaker() { this.timerComponent.startSpeaker(); }
  stopSpeaker() {this.timerComponent.stopSpeaker(); }
  skipSpeaker() {this.timerComponent.skipSpeaker(); }

  getTime(): number {
   const minutesRecorded = (<HTMLInputElement>document.getElementById('minutes')).value;
   const secondsRecorded = (<HTMLInputElement>document.getElementById('seconds')).value;
   return parseInt(minutesRecorded, 0) * 60 + parseInt(secondsRecorded, 0);
  } // TODO: Conditional Timer
    // TODO: Limits on time

  getSpeakerTime(): number {
    const minutesInput = (<HTMLInputElement>document.getElementById('speakerMinutes')).value;
    const secondsInput = (<HTMLInputElement>document.getElementById('speakerSeconds')).value;
    return parseInt(minutesInput, 0) * 60 + parseInt(secondsInput, 0);
  }

  submitSpeakerTime(time: number): number {
    return time;
  }

  submitTime(time: number): number {
    return time;
  }

  openEmojiDialog() {
    const dialog = this.dialog.open(MotionsComponent, {
      width: '1000px',
      height: '500px',
      hasBackdrop: true,
      autoFocus: true,
    });

    dialog.afterClosed()
      .subscribe(passedMotion => this.matTopic = passedMotion);

  }

  passMotion(motion: string): void {
    this.caucusComponent.submitCaucusTopic(motion);
  }

/*  openOrdinaryText(): void {
    const dialogRef = this.dialog.open(`This work??`, {
      width: '250px',
    });
    /*dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result: ${result');
    });
  }

  openCoolForm(): void {
    const dialogRef = this.dialog.open(DialogContentOrdinary, {
      width: '250px',
    });
        dialogRef.afterClosed().subscribe(result => {
          console.log('Dialog result: ${result');
        });*/

}
