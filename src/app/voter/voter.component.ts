import { Component, EventEmitter, Input, Output } from '@angular/core';
import {VoterService} from '../voter.service';
import { Subscription } from 'rxjs/index';
import {VotetakerComponent} from '../votetaker/votetaker.component';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})

export class VoterComponent {
  @Input()  name: string;
  @Output() voted = new EventEmitter<string>();
  didVote = false;

  vote(result: string) {
    this.voted.emit(result);
    /*this.didVote = true;*/
    /*  this.voterService.resetButton$(this.didVote);*/
  }

  resetButton() {
    this.didVote = false;
  }

/*  voteMotion = '<no motion in place>';
  subscription: Subscription;

  constructor(private voterService: VoterService) {
    this.subscription = voterService.resetButton$.subscribe(
      didVote => {
        this.didVote = didVote;
    });
  }
*/

}
