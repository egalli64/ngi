import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user07',
  templateUrl: './user07.component.html',
  styleUrls: ['./user07.component.css']
})
export class User07Component implements OnInit {
  name: string;

  constructor() {
    this.name = 'Tom';
  }

  ngOnInit() {
  }

}
