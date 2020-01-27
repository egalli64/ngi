import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users9',
  templateUrl: './users9.component.html',
  styleUrls: ['./users9.component.css']
})
export class Users9Component implements OnInit {
  names: string[];

  constructor() {
    this.names = ['Tom', 'Bob', 'Sid'];
  }

  ngOnInit() {
  }

}
