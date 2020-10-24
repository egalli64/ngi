import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello9',
  templateUrl: './hello9.component.html',
  styleUrls: ['./hello9.component.css']
})
export class Hello9Component implements OnInit {
  message: string;
  counter: number;

  constructor() {
    this.message = 'Hello';
    this.counter = 0;
  }

  ngOnInit(): void {
  }

  increase() {
    this.counter += 1;
  }
}
