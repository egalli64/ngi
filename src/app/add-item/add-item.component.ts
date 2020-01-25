import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  add(id: HTMLInputElement, name: HTMLInputElement): boolean {
    console.log(`(${id.value}, ${name.value})`);
    return false;
  }
}
