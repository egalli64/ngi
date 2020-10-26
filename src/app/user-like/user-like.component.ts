import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-user-like',
  templateUrl: './user-like.component.html',
  styleUrls: ['./user-like.component.css']
})
export class UserLikeComponent implements OnInit {
  @Input() user: User;
  @Output() liked = new EventEmitter<User>();

  constructor() {
    // alternative to direct property initialization 
    // this.liked = new EventEmitter();
  }

  ngOnInit(): void {
  }

  plusOne() {
    this.user.likes += 1;
    this.liked.emit(this.user);
  }
}
