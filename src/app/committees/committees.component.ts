import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CommitteesService} from '../committees.service';
import { Committee } from '../committees';

@Component({
  selector: 'app-committees',
  templateUrl: './committees.component.html',
  styleUrls: ['./committees.component.css']
})

export class CommitteesComponent implements OnInit {
  @Input() committee: Committee;

  constructor(
    private route: ActivatedRoute,
    private committeesService: CommitteesService,
    private location: Location,
  ) { }

  ngOnInit() {
    this.getCommittee();
  }

  getCommittee(): void {
    const noId = +this.route.snapshot.paramMap.get('noId');
    this.committeesService.getCommittee(noId)
      .subscribe(committee => this.committee = committee);
  }
}
