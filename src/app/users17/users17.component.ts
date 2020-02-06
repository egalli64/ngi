import { Component, OnInit } from '@angular/core';

import { User } from '../user.model'

@Component({
  selector: 'app-users17',
  templateUrl: './users17.component.html',
  styleUrls: ['./users17.component.css']
})
export class Users17Component implements OnInit {
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
