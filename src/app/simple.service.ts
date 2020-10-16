import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimpleService {

  constructor() { }

  negate(value: number) {
    return -value;
  }

  hello(name: string) {
    return 'Hello, ' + name;
  }

  team() {
    return ['Bob', 'Kim', 'Jim'];
  }
}
