import { Component, OnInit } from '@angular/core';

import { UsersService } from '../users.service';
import { User } from '../user.model'

@Component({
  selector: 'app-users25',
  templateUrl: './users25.component.html',
  styleUrls: ['./users25.component.css']
})
export class Users25Component implements OnInit {
  users: Array<User>;

  constructor(us: UsersService) {
    this.users = us.get();
  }

  ngOnInit() {
  }

  moreLikes(user: User) {
    console.log(`Likes for ${user.name} are ${user.likes}`);
  }
}
