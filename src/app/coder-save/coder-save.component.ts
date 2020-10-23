import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Coder } from '../coder.model';
import { CoderService } from '../coder.service';

@Component({
  selector: 'app-coder-save',
  templateUrl: './coder-save.component.html',
  styleUrls: ['./coder-save.component.css']
})
export class CoderSaveComponent implements OnInit {
  fCoder: FormGroup;

  constructor(fb: FormBuilder, private svc: CoderService) { 
    this.fCoder = fb.group(new Coder(0, '', '', new Date(), 0));
  }

  save() {
    this.svc.save(this.fCoder.value).subscribe(
      res => console.log('done', res),
      err => console.log('error', err)
    );
  }

  ngOnInit(): void {
  }
}
