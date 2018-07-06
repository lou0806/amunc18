import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Committee } from '../committees';
import { CommitteesService} from '../committees.service';

@Component({
  selector: 'app-committees',
  templateUrl: './committees.component.html',
  styleUrls: ['./committees.component.css']
})

export class CommitteesComponent implements OnInit {
  @Input() committee: Committee;
  committeeParse: Committee;

  constructor(
    private route: ActivatedRoute,
    private committeesService: CommitteesService,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.getCommittee();
  }

  checkParse(): string {
    return (this.route.snapshot.paramMap.get('noId'));
  }

  getCommittee(): void {
    const noId = parseInt(this.route.snapshot.paramMap.get('noId'), 0);
    this.committeesService.getCommittee(noId)
      .subscribe(committee => this.committee = committee);
  }
  /*
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params.get('noId'));
      this.committee = params.get('noId');
    });
  }*/

}
