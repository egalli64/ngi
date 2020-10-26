import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list26',
  templateUrl: './user-list26.component.html',
  styleUrls: ['./user-list26.component.css']
})
export class UserList26Component implements OnInit {
  users: Array<User>;

  constructor(us: UserService) {
    this.users = us.get();
  }

  ngOnInit(): void {
  }

  moreLikes(user: User) {
    console.log(`Likes for ${user.name} now are ${user.likes}`);

    // ...
  }
}
