import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  names: string[];

  constructor() {
    this.names = ['Tom', 'Bob', 'Sid'];
  }

  ngOnInit() {
  }

}
