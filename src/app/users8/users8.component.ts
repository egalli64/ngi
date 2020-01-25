import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users8',
  templateUrl: './users8.component.html',
  styleUrls: ['./users8.component.css']
})
export class Users8Component implements OnInit {
  names: string[];

  constructor() {
    this.names = ['Tom', 'Bob', 'Sid'];
  }

  ngOnInit() {
  }

}
