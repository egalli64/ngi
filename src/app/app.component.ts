import { Component } from '@angular/core';

import { User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome Angular!';

  addUser(user: User) {
    console.log(user);
  }
}
