import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Committee } from '../committees';
import { CommitteesComponent } from '../committees/committees.component';
import { CommitteesService } from '../committees.service';

import { Member } from '../member';
import {MemberService} from '../member.service';
import {CaucusService} from '../caucus.service';

import {TimerComponent} from '../timer/timer.component';
import {TimerParentComponent} from '../timer-parent/timer-parent.component';

import {LogService} from '../log.service';
import { MemberSearchComponent} from '../member-search/member-search.component';

import {HttpHeaders, HttpClient} from '@angular/common/http';
import {MatTabsModule} from '@angular/material';

@Component({
  selector: 'app-caucus',
  templateUrl: './caucus.component.html',
  styleUrls: ['./caucus.component.css'],
  providers: [CaucusService],
  encapsulation: ViewEncapsulation.None,
})

export class CaucusComponent implements OnInit {
  @Input() committeeName: string;

  members: Member[];
  speakersList: string[] = [];
  membersList: string[] = [];

  // TODO: Make unique committee logs
  // TODO: parent child- relationship between this and committees?

  constructor(
    private memberService: MemberService,
    private caucusService: CaucusService,
    private logService: LogService,
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
  } /* FIXME: Disable ability to add member after adding it*/

  addSpeaker(member: string) {
    this.speakersList.push(member);
  }

  addedAlready(member: Member): boolean {
    if (Object.values(this.membersList).includes(member.name)) {
      return true;
    } else {
      return false;
    }
  }

  removeSpeakerTop() {
    this.logSpeaker(this.speakersList[0]);
    this.speakersList.shift();
  } /* FIXME: For auto update*/

  removeSpeaker(speaker: string) {
    this.speakersList.splice(this.speakersList.lastIndexOf(speaker), 1); // TODO: FIX THE DUPLICATE PROBLEM
  } // FIXME: INPUT WITH TIME FOR LOGGING REASONS, doesn't seem to need it??


  public logSpeaker(message: string) {
    this.logService.updateSpeakersLog('Log Speaker: ' + message); /*TODO: test if works*/
  } /* TODO: Yielding?*/

  public logTimer(input: number) {
    this.logService.updateLogTimer(input);
  }

  public logMotion (message: string) {
    this.logService.updateMotionLog(message);
  } // TODO: log the motions (FIXED?)

  // TODO: MOderated and Unmoderated Indicators

}
