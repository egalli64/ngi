import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HelloService {
  readonly url: string = 'http://localhost:8080/hello';

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.url);
  }
}
