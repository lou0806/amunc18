import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatTabsModule} from '@angular/material';
import { AppRoutingModule} from './app-routing.module';
import { MatDialogModule} from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { MembersComponent } from './members/members.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MemberSearchComponent } from './member-search/member-search.component';
import { CaucusComponent } from './caucus/caucus.component';
import { TimerComponent } from './timer/timer.component';
import { TimerParentComponent } from './timer-parent/timer-parent.component';
import { ConferenceLogComponent } from './conference-log/conference-log.component';
import { VoterComponent } from './voter/voter.component';
import { VotetakerComponent } from './votetaker/votetaker.component';
import { CommitteesComponent } from './committees/committees.component';
import { CommitteesFrontComponent } from './committees-front/committees-front.component';
import { NgbdModalComponent, NgbdModalContent } from './modal-component/modal-component.component';
import { MotionsComponent } from './motions/motions.component';
import { CheapTimerComponent } from './cheap-timer/cheap-timer.component';
import { CheapTimerChildComponent } from './cheap-timer-child/cheap-timer-child.component';

@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    MessagesComponent,
    DashboardComponent,
    MemberSearchComponent,
    CaucusComponent,
    TimerComponent,
    TimerParentComponent,
    ConferenceLogComponent,
    VoterComponent,
    VotetakerComponent,
    CommitteesComponent,
    CommitteesFrontComponent,
    MotionsComponent,
    NgbdModalComponent,
    NgbdModalContent,
    CheapTimerComponent,
    CheapTimerChildComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    NgbModule.forRoot(),
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, /* The forRoot() configuration method takes an
                                                         InMemoryDataService class that primes the in-memory database.*/
    ),
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    MotionsComponent,
    NgbdModalContent,
    CheapTimerComponent
  ]
})
export class AppModule { }
