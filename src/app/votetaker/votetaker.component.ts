import { Component, Input, Output, ViewChild, AfterViewInit } from '@angular/core';
import { CaucusComponent } from '../caucus/caucus.component';
import {VoterComponent} from '../voter/voter.component';
import {VoterService} from '../voter.service';
import { LogService } from '../log.service';

@Component({
  selector: 'app-votetaker',
  templateUrl: './votetaker.component.html',
})
export class VotetakerComponent {
  agreed = 0;
  disagreed = 0;
  abstained = 0;

  varVote = false;
  private logService: LogService;

  @ViewChild(VoterComponent)
  private voterComponent: VoterComponent;

  constructor (
    private caucusComponent: CaucusComponent
  ) {}

  @Input() voters: string[];

  onVoted(result: string) {
    if (parseInt(result, 0) === 1) {
      this.agreed++;
    } else if (parseInt(result, 0) === 0) {
      this.disagreed++;
    } else if (parseInt(result, 0) === -1) {
      this.abstained++;
    }
  }

  showResult(): void {
    if (this.agreed > this.disagreed) {
      document.getElementById('ResultOfVote').innerHTML = 'Motion Passes!';
    } else if (this.agreed < this.disagreed) {
      document.getElementById('ResultOfVote').innerHTML = 'Motion Fails!';
    } else if (this.agreed === this.disagreed) {
      document.getElementById('ResultOfVote').innerHTML = 'Tie!';
    }
  } // TODO: Log Result

  showSubject(input: string): void {
    this.caucusComponent.logMotion(input);
    document.getElementById('SubjectOfVote').innerHTML = 'Voting On:' + input;
  }

  resetVote() {
    this.agreed = 0;
    this.disagreed = 0;
    this.abstained = 0;
    this.varVote = true;
 /* TODO: FIX, SO FAR ONLY RESETS FIRST ONE UPDATE: CHANGED*/
  }

}
