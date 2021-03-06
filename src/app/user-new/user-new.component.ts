import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {
  submitted = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  create(name: string, likes: string) {
    let user: User = new User(name, parseInt(likes));
    console.log("New user is", user);

    this.submitted = true;
    setTimeout(() => { this.submitted = false; }, 1000);

    // ...
  }
}
