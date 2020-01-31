import { Component, OnInit } from '@angular/core';

import { User } from '../user.model'

@Component({
  selector: 'app-users15',
  templateUrl: './users15.component.html',
  styleUrls: ['./users15.component.css']
})
export class Users15Component implements OnInit {
  users: Array<User>;

  constructor() {
    this.users = [new User('Tom', 2), new User('Bob', 1), new User('Sid', 3)];
  }

  ngOnInit() {
  }

  moreLikes(user: User) {
    console.log(`Likes for ${user.name} are ${user.likes}`);
  }
}
