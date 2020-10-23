import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dir-strut',
  templateUrl: './dir-strut.component.html',
  styleUrls: ['./dir-strut.component.css']
})
export class DirStrutComponent implements OnInit {
  names: Array<string>
  values: Array<number>

  constructor() {
    this.names = ['Bob', 'Kim', 'Vic'];
    this.values = [3, 6, 9];
  }

  ngOnInit(): void {
  }

}
