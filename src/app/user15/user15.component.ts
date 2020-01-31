import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { User } from '../user.model'

@Component({
  selector: 'app-user15',
  templateUrl: './user15.component.html',
  styleUrls: ['./user15.component.css']
})
export class User15Component implements OnInit {
  @Input() user: User;
  @Output() liked: EventEmitter<User>;

  constructor() { this.liked = new EventEmitter(); }

  ngOnInit() {
  }

  plusOne() {
    this.user.likes += 1;
    this.liked.emit(this.user);
  }
}
