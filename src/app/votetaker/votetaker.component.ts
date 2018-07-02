import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-votetaker',
  templateUrl: './votetaker.component.html',
})
export class VotetakerComponent {
  agreed = 0;
  disagreed = 0;
  abstained = 0;

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
  }

  /*logStartVote() {

  }*/
}
