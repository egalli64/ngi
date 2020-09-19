import { Component, OnInit } from '@angular/core';
import { Coder } from '../coder.model';
import { CoderService } from '../coder.service';

@Component({
  selector: 'app-coder',
  templateUrl: './coder.component.html',
  styleUrls: ['./coder.component.css']
})
export class CoderComponent implements OnInit {
  private coders: Coder[];

  constructor(private svc: CoderService) { }

  ngOnInit(): void {
    this.svc.findAll().subscribe(data => {
      this.coders = data;
    });
  }

}
