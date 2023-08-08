import { Component, OnInit } from '@angular/core';
import { ContainComponent } from './contain/contain.component';
import { HeaderComponent } from './header/header.component';
import { MbarComponent } from './mbar/mbar.component';

@Component({
  standalone: true,
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css'],
  imports: [MbarComponent, ContainComponent, HeaderComponent],
})
export class ConversationComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
