import { Component, OnInit } from '@angular/core';
import { HelloService } from '../hello.service';

@Component({
  selector: 'app-my-http',
  templateUrl: './my-http.component.html',
  styleUrls: ['./my-http.component.css']
})
export class MyHttpComponent implements OnInit {
  message: string;
  answered: boolean = true;

  constructor(private svc: HelloService) {
  }

  request(): void {
    this.answered = false;
    this.message = '';
    this.svc.getData().subscribe(
      res => {
        this.message = res['message'];
        this.answered = true;
      },
      err => {
        this.message = err['message'];
        this.answered = true;
      }
    );
  }

  ngOnInit() {
  }
}
