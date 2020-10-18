import { Component, OnInit } from '@angular/core';
import { SimpleService } from '../simple.service';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnInit {
  user: string;
  message: string;

  constructor(private svc: SimpleService) { }

  ngOnInit(): void {
  }

  sayHello() {
    this.message = this.svc.hello(this.user ? this.user : "stranger");
  }
}
