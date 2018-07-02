import { Component, OnInit } from '@angular/core';

import { Member } from '../member';
import {MemberService} from '../member.service';
import {CaucusService} from '../caucus.service';

import {TimerComponent} from '../timer/timer.component';
import {TimerParentComponent} from '../timer-parent/timer-parent.component';

import {LogService} from '../log.service';

@Component({
  selector: 'app-caucus',
  templateUrl: './caucus.component.html',
  styleUrls: ['./caucus.component.css'],
  providers: [CaucusService],
})

export class CaucusComponent implements OnInit {

  members: Member[];
  speakersList: string[] = [];
  membersList: string[] = [];

  constructor(
    private memberService: MemberService,
    private caucusService: CaucusService,
  ) { }

  ngOnInit() {
    this.getMembers();
  }

  getMembers(): void {
    this.memberService.getMembers()
      .subscribe(members => this.members = members); /*Observable.subscribe() */
  }

  addMember(member: Member) {
    this.membersList.push(`${member.name}`);
  } /*Disable ability to add member after adding it*/

  addSpeaker(member: string) {
    this.speakersList.push(member);
  }

  removeSpeakerTop() {
    this.speakersList.shift();
  } /* TODO: For autoupdate*/

  removeSpeaker(speaker: string) {
    this.speakersList.splice(this.speakersList.lastIndexOf(speaker), 1); // TODO: FIX THE DUPLICATE PROBLEM
  }
}
