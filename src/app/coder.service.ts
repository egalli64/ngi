import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Coder } from './coder.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoderService {
  readonly url: string = 'http://localhost:8080/coders';

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<Coder[]> {
    return this.http.get<Coder[]>(this.url);
  }

  public save(coder: Coder): Observable<Coder> {
    return this.http.post<Coder>(this.url, coder);
  }
}
