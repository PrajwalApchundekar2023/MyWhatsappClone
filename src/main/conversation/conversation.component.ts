import { Component, OnInit } from '@angular/core';
import { ConheaderComponent } from './conheader/conheader.component';
import { FooterComponent } from './footer/footer.component';
import { MsgWindowComponent } from './msg-window/msg-window.component';

@Component({
  standalone: true,
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css'],
  imports: [ConheaderComponent, FooterComponent, MsgWindowComponent],
})
export class ConversationComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
