import { Component, OnInit } from '@angular/core';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})

/*To display the message from MemberService, an extension from MessageService*/
export class MessagesComponent implements OnInit {

  constructor(
    public messageService: MessageService /* Must be public because we bind to it in the template*/
  ) { }

  ngOnInit() {
  }

}
