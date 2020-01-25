import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user7',
  templateUrl: './user7.component.html',
  styleUrls: ['./user7.component.css']
})
export class User7Component implements OnInit {
  name: string;

  constructor() {
    this.name = 'Tom';
  }

  ngOnInit() {
  }

}
