import {Input, Component, OnInit, OnDestroy, Output, EventEmitter} from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material'
import { CaucusComponent } from '../caucus/caucus.component';
import {TimerParentComponent} from '../timer-parent/timer-parent.component';

class Motion {
  type: string;
  name: string;
  minutes: number;
  seconds: number;
}

@Component({
  selector: 'app-motions',
  templateUrl: './motions.component.html',
  styleUrls: ['./motions.component.css']
})
export class MotionsComponent {

  constructor(
    public dialogRef: MatDialogRef<MotionsComponent>,
  ) {}

  motionsList: Motion[] = [];
  newMotion: Motion;
  passedMotion: string;

  passMotion(motion: Motion): string {
    if (motion.type === 'Moderated Caucus') {
      this.passedMotion = motion.name;
      /*this.timerComponent.passMotion(motion.name);*/
      return motion.name;
    } else if (motion.type === 'Unmoderated Caucus') {
      this.passedMotion = 'Unmoderated Caucus for ' + motion.minutes + ':' + motion.seconds;
      /*this.timerComponent.passMotion('Unmoderated Caucus for ' + motion.minutes + ':' + motion.seconds);*/
      return 'Unmoderated Caucus for ' + motion.minutes + ':' + motion.seconds;
    }
  }

  confirmSelection() {
    this.dialogRef.close(this.passedMotion);
  }

  addMotion(): void {
    const minute = (<HTMLInputElement>document.getElementById('minutesCau')).value;
    const second = (<HTMLInputElement>document.getElementById('secondsCau')).value;
    this.newMotion = {
      type: (<HTMLInputElement>document.getElementById('typeOfCaucus')).value,
      name: 'on ' + (<HTMLInputElement>document.getElementById('topic23')).value,
      minutes: parseInt(minute , 0),
      seconds: parseInt(second , 0),
    };
    this.motionsList.push(this.newMotion);
  }
}

/*
    this.newMotion.type = (<HTMLInputElement>document.getElementById('typeOfCaucus')).value;
    this.newMotion.name = (<HTMLInputElement>document.getElementById('topic')).value;
    this.newMotion.minutes = (parseInt((<HTMLInputElement>document.getElementById('minutes')).value, 0));
    this.newMotion.seconds = (parseInt((<HTMLInputElement>document.getElementById('seconds')).value, 0));*/
