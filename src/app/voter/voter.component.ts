import { Component, EventEmitter, Input, Output } from '@angular/core';

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
    this.didVote = true;
  }
}
