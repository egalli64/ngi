import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { User } from '../user.model'

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  @Output() out = new EventEmitter<User>();
  model: User;

  constructor() {
    this.model = new User('Bill', 42);
  }

  submit() {
    this.out.emit(this.model);
  }

  ngOnInit() { }
}
