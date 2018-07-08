import { AfterViewInit, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
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

  constructor(
    public dialogRef: MatDialogRef<CheapTimerComponent>,
  ) { }
}
