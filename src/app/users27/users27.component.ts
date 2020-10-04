import { Component, OnInit } from '@angular/core';

import { UsersService } from '../users.service';
import { User } from '../user.model'

@Component({
  selector: 'app-users27',
  templateUrl: './users27.component.html',
  styleUrls: ['./users27.component.css']
})
export class Users27Component implements OnInit {
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
