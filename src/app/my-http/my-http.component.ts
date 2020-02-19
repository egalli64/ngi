import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-my-http',
  templateUrl: './my-http.component.html',
  styleUrls: ['./my-http.component.css']
})
export class MyHttpComponent implements OnInit {
  data: Object;
  loaded: boolean;
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
    this.loaded = true;
  }

  makeRequest(): void {
    this.loaded = false;
    this.http.get('http://localhost:3000/hello').subscribe(data => {
      this.data = data;

      

      this.loaded = true;
    });
  }

  ngOnInit() {
  }
}
