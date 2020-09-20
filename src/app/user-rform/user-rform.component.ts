import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { User } from '../user.model'

@Component({
  selector: 'app-user-rform',
  templateUrl: './user-rform.component.html',
  styleUrls: ['./user-rform.component.css']
})
export class UserRFormComponent implements OnInit {
  private fUser: FormGroup;

  constructor(fb: FormBuilder) { 
    this.fUser = fb.group(new User('Kim', 12));
  }

  submit(user: User) { console.log(user); }

  ngOnInit() {
  }
}
