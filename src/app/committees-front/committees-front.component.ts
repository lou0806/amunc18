import { Component, OnInit } from '@angular/core';

import { Committee} from '../committees';
import { CommitteesService } from '../committees.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './committees-front.component.html',
  styleUrls: ['./committees-front.component.css']
})
export class CommitteesFrontComponent implements OnInit {
  committees: Committee[];

  constructor(private committeeService: CommitteesService) { }

  ngOnInit() {
    this.getCommittees();
  }

  getCommittees(): void {
    this.committeeService.getCommittees()
      .subscribe(committees => this.committees = committees);
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
