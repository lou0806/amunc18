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

  committees: Committee[] = []; // TODO: SEPARATE?
  x: number;
  committee: Committee;

  constructor(
    private route: ActivatedRoute,
    private committeesService: CommitteesService,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.getCommittees();
  }

  checkParse(): number {
    this.x = parseInt(this.route.snapshot.paramMap.get('noId'), 0);
    return this.x;
  }

  /*getCommittee(): void {
    this.x = 0;
    this.committee = this.committees[0];
    /*
        const noId = parseInt(this.route.snapshot.paramMap.get('noId'), 0);
    this.committeesService.getCommittee(noId)
      .subscribe(committee => this.committee = committee);*/
  /*}*/
  getCommittees(): void {
    this.committeesService.getCommittees()
      .subscribe(committees => this.committees = committees);
    /*this.getCommittee();*/
  }
  /*
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params.get('noId'));
      this.committee = params.get('noId');
    });
  }*/

}
