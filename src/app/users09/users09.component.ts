import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users09',
  templateUrl: './users09.component.html',
  styleUrls: ['./users09.component.css']
})
export class Users09Component implements OnInit {
  names: string[];

  constructor() {
    this.names = ['Tom', 'Bob', 'Sid'];
  }

  ngOnInit() {
  }

}
