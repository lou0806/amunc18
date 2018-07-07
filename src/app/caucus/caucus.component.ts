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
import {DialogPosition, MatDialogConfig, MatTabsModule} from '@angular/material';
import { MotionsComponent } from '../motions/motions.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


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
  modList: string[] = [];
  caucusTopic = '';

  // TODO: Make unique committee logs
  // TODO: parent child- relationship between this and committees?

  constructor(
    private memberService: MemberService,
    private caucusService: CaucusService,
    private logService: LogService,
    public dialog: MatDialog,
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

  addModCau(member: string) {
    this.modList.push(member);
  }

  removeModSpeaker(member: string) {
    this.modList.splice(this.modList.lastIndexOf((member)), 1);
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

  removeCaucusTop() {
    this.modList.shift(); // TODO: Logging
  }

  removeSpeaker(speaker: string) {
    this.speakersList.splice(this.speakersList.lastIndexOf(speaker), 1);
    // TODO: FIX THE DUPLICATE PROBLEM
  } // FIXME: INPUT WITH TIME FOR LOGGING REASONS, doesn't seem to need it??

  endModeratedCaucus(): void {
    this.caucusTopic = '';
    this.modList = [];
  }

  isListContained(list: string[]): boolean {
    if (list.length !== 0) {
      return true;
    } else {
      return false;
    }
  }

  isModStart(input: string): boolean {
    if (input.length !== 0) {
      return true;
    } else {
      return false;
    }
  }

  callModCaucus(): string {
    const caucusTopic = (<HTMLInputElement>document.getElementById('moderatedCaucusTopic')).value;
    return caucusTopic;
  }

  submitCaucusTopic(input: string): string {
    this.caucusTopic = input;
    return input;
  }

  currentList(input: string): string {
    if (input.length !== 0) {
      return 'Moderated Caucus';
    } else {
      return 'Speaker List';
    }
  }

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
