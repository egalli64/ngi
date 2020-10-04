import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-my-http',
  templateUrl: './my-http.component.html',
  styleUrls: ['./my-http.component.css']
})
export class MyHttpComponent implements OnInit {
  readonly url: string = 'http://localhost:8080/hello';
  message: string;
  answered: boolean = true;

  constructor(private http: HttpClient) {
  }

  request(): void {
    this.answered = false;
    this.message = '';
    this.http.get(this.url).subscribe(
      res => {
        this.message = res['message'];
        this.answered = true;
      },
      err => {
        this.message = err['message'];
        this.answered = true;
      }
    );
  };

  ngOnInit() {
  }
}
