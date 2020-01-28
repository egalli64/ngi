import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user09',
  templateUrl: './user09.component.html',
  styleUrls: ['./user09.component.css']
})
export class User09Component implements OnInit {
  @Input() name: string;

  constructor() {
  }

  ngOnInit() {
  }

}
