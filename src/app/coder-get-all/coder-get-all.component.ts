import { Component, OnInit } from '@angular/core';
import { Coder } from '../coder.model';
import { CoderService } from '../coder.service';

@Component({
  selector: 'app-coder-get-all',
  templateUrl: './coder-get-all.component.html',
  styleUrls: ['./coder-get-all.component.css']
})
export class CoderGetAllComponent implements OnInit {
  public coders: Coder[];

  constructor(private svc: CoderService) { }

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.svc.findAll().subscribe(data => {
      this.coders = data;
    });
  }
}
