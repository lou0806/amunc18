import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MembersComponent} from './members/members.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MemberDetailComponent} from './member-detail/member-detail.component';
import {CaucusComponent} from './caucus/caucus.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'detail/:id', component: MemberDetailComponent},
  { path: 'members', component: MembersComponent },
  { path: 'caucus', component: CaucusComponent}
]; // defined array of Routes as routes, declares before the decorator @NgModule

@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports : [RouterModule]
})

export class AppRoutingModule { }

// don't normally declare components in a routing module, so we deleted the declarations array
// Routes tell the router which view to display when a user clicks a link or pastes a URL into the browser address bar.
/* Properties of routes(typically):
path: a string that matches the URL in the browser address bar.
component: the component that the router should create when navigating to this route.
 */



