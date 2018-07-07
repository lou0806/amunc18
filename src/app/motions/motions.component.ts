import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material';
import { MAT_DIALOG_DATA } from "@angular/material";

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

  motionsList: Motion[] = [];
  newMotion: Motion; /*= {
    type: (<HTMLInputElement>document.getElementById('typeOfCaucus')).value,
    name: (<HTMLInputElement>document.getElementById('topic')).value,
    minutes: (parseInt((<HTMLInputElement>document.getElementById('minutes')).value, 0)),
    seconds: (parseInt((<HTMLInputElement>document.getElementById('seconds')).value, 0)),
  }*/;

  constructor(
    public dialogRef: MatDialogRef<MotionsComponent>
  ) {}

  addMotion(): void {
    this.newMotion = {
      type: (<HTMLInputElement>document.getElementById('typeOfCaucus')).value,
      name: (<HTMLInputElement>document.getElementById('topic')).value,
      minutes: (parseInt((<HTMLInputElement>document.getElementById('minutes')).value, 0)),
      seconds: (parseInt((<HTMLInputElement>document.getElementById('seconds')).value, 0)),
    };
    /*
    this.newMotion.type = (<HTMLInputElement>document.getElementById('typeOfCaucus')).value;
    this.newMotion.name = (<HTMLInputElement>document.getElementById('topic')).value;
    this.newMotion.minutes = (parseInt((<HTMLInputElement>document.getElementById('minutes')).value, 0));
    this.newMotion.seconds = (parseInt((<HTMLInputElement>document.getElementById('seconds')).value, 0));*/
    this.motionsList.push(this.newMotion);
  }
}
