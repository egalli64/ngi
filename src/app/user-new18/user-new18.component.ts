import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-user-new18',
  templateUrl: './user-new18.component.html',
  styleUrls: ['./user-new18.component.css']
})
export class UserNew18Component implements OnInit {
  user: User;
  submitted: boolean;

  constructor() {
    this.reset();
  }

  private reset() {
    this.user = new User('', 0);
    this.submitted = false;
  }

  ngOnInit(): void {
  }

  create() {
    console.log("New user is", this.user);
    this.submitted = true;
    setTimeout(() => { this.reset(); }, 1000);

    // ...
  }
}
