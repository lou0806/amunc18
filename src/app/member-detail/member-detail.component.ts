import { Component, OnInit , Input} from '@angular/core';
import { Member } from '../member';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  @Input() member: Member;

  constructor(
    private route: ActivatedRoute,
    private memberService: MemberService,
    private location: Location,
  ) { }

  ngOnInit() {
    this.getMember(); // call getMember in the lifecycle hook
  }

  getMember(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.memberService.getMember(id)
      .subscribe(member => this.member = member);
  }
  /*The route.snapshot is a static image of the route information shortly after the component was created.
  The paramMap is a dictionary of route parameter values extracted from the URL. The "id" key returns the id of the
  to fetch. Route parameters are always strings. The JavaScript (+) operator converts the string to a number, which is
  what a hero id should be.*/

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.memberService.updateMember(this.member)
      .subscribe(() => this.goBack()); // Adds the save() method, which persists hero name changes using the
                                     // hero service update
    // () method and then navigates back to the previous view.
  }
}
