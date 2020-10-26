import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: Array<User>;

  constructor() {
    this.users = [
      new User('Bob', 1),
      new User('Tom', 2),
      new User('Sid', 3)
    ];
  }

  /**
   * doubius implementation, a shallow copy of users is returned 
   */
  get() {
    return [].concat(this.users);
  }

  add(user: User) {
    this.users.push(user);
  }
}
