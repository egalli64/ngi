import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { User } from '../user.model'

@Component({
  selector: 'app-user17',
  templateUrl: './user17.component.html',
  styleUrls: ['./user17.component.css']
})
export class User17Component implements OnInit {
  @Input() user: User;
  @Output() liked: EventEmitter<User>;
  back: boolean;

  constructor() {
    this.liked = new EventEmitter();
    this.back = true;
  }

  ngOnInit() {
  }

  plusOne() {
    this.user.likes += 1;
    this.liked.emit(this.user);
  }

  swapBack() {
    this.back = !this.back;
  }  
}
