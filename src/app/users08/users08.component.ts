import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users08',
  templateUrl: './users08.component.html',
  styleUrls: ['./users08.component.css']
})
export class Users08Component implements OnInit {
  names: string[];

  constructor() {
    this.names = ['Tom', 'Bob', 'Sid'];
  }

  ngOnInit() {
  }
}
