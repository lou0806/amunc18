import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material';
import { MAT_DIALOG_DATA } from "@angular/material";


@Component({
  selector: 'app-motions',
  templateUrl: './motions.component.html',
  styleUrls: ['./motions.component.css']
})
export class MotionsComponent {
  emojis = ['what','wat','wot'];
  choosenEmoji: string;

  constructor(
    public dialogRef: MatDialogRef<MotionsComponent>) {
  }

  confirmSelection() {
    this.dialogRef.close(this.choosenEmoji);
  }
}
