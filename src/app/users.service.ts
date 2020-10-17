import { Injectable } from '@angular/core';

import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private users: Array<User>;

  constructor() {
    this.users = [
      new User('Bob', 1),
      new User('Tom', 2),
      new User('Sid', 3)
    ];
  }

  get() {
    return this.users;
  }

  add(user: User) {
    this.users.push(user);
  }
}
