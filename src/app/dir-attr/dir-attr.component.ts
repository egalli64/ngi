import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dir-attr',
  templateUrl: './dir-attr.component.html',
  styleUrls: ['./dir-attr.component.css']
})
export class DirAttrComponent implements OnInit {
  myClasses = {
    back: true,
    fore: true,
    bold: true
  };

  myStyles = {
    'background-color': '',
    color: '',
    'font-weight': ''
  };

  isBold = false;

  constructor() { }

  ngOnInit(): void {
    this.shuffle();
  }

  shuffle() {
    this.myClasses.back = Math.random() < .5;
    this.myClasses.fore = Math.random() < .5;
    this.myClasses.bold = Math.random() < .5;

    this.myStyles['background-color'] = this.myClasses.back ? 'aqua' : 'white';
    this.myStyles['color'] = this.myClasses.fore ? 'blue' : 'black';
    this.myStyles['font-weight'] = this.myClasses.bold ? 'bold' : 'normal';
  }

  swap() {
    this.isBold = !this.isBold;
  }
}
