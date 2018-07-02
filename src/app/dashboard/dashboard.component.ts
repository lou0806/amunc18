import { Component, OnInit } from '@angular/core';
import { Member} from '../member';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  members: Member[] = [];

  constructor(private memberService: MemberService) { }

  ngOnInit() {
    this.getMembers();
  }

  getMembers(): void {
    this.memberService.getMembers()
      .subscribe(members => this.members = members.slice(1, 5));
  }
}

/*It defines a heroes array property.
The constructor expects Angular to inject the HeroService into a private heroService property.
The ngOnInit() lifecycle hook calls getHeroes.*/
