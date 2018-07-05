import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatTabsModule} from '@angular/material';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { MembersComponent } from './members/members.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MemberSearchComponent } from './member-search/member-search.component';
import { CaucusComponent } from './caucus/caucus.component';
import { TimerComponent } from './timer/timer.component';
import { TimerParentComponent } from './timer-parent/timer-parent.component';
import { ConferenceLogComponent } from './conference-log/conference-log.component';
import { VoterComponent } from './voter/voter.component';
import {VotetakerComponent} from './votetaker/votetaker.component';

@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    MemberDetailComponent,
    MessagesComponent,
    DashboardComponent,
    MemberSearchComponent,
    CaucusComponent,
    TimerComponent,
    TimerParentComponent,
    ConferenceLogComponent,
    VoterComponent,
    VotetakerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false} /* The forRoot() configuration method takes an
                                                         InMemoryDataService class that primes the in-memory database.*/
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
