import { Component, OnInit, Input } from '@angular/core';
import { CaucusComponent } from '../caucus/caucus.component';
import { CommitteesService} from '../committees.service';
import {Committee} from '../committees';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {CaucusService} from '../caucus.service';


@Component({
  selector: 'app-committees',
  templateUrl: './committees.component.html',
  styleUrls: ['./committees.component.css']
})
export class CommitteesComponent implements OnInit {
  @Input() committee: Committee;

  constructor(
    private committeesService: CommitteesService,
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.getCommittee();
  }

  getCommittee(): void {
    const no = +this.route.snapshot.paramMap.get('no');
    this.committeesService.getCommittee(no)
      .subscribe(committee => this.committee = committee);
  }
}

