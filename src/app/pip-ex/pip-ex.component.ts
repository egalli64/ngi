import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pip-ex',
  templateUrl: './pip-ex.component.html',
  styleUrls: ['./pip-ex.component.css']
})
export class PipExComponent implements OnInit {
  today: Date;
  isFull: boolean;
  balance: number;
  dessert: string;

  constructor() {
    this.today = new Date();
    this.isFull = false;
    this.balance = 42.27;
    this.dessert = 'cheese cake'
  }

  get dateFormat() {
    return this.isFull ? 'fullDate' : 'shortDate';
  }

  switchDateFormat() {
    this.isFull = !this.isFull;
  }

  ngOnInit(): void {
  }

}
