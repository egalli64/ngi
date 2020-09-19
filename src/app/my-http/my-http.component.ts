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
  answered: boolean = false;

  constructor(private http: HttpClient) {
    this.answered = true;
  }

  makeRequest(): void {
    this.answered = false;
    this.message = '';
    this.http.get(this.url).subscribe(
      data => {
        this.message = data['message'];
        this.answered = true;
      },
      error => {
        this.message = error.message;
        this.answered = true;
      }
    );
  };

  ngOnInit() {
  }
}
