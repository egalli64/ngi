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

  constructor(private fb: FormBuilder, private svc: CoderService) { 
    this.fCoder = fb.group(new Coder(0, 'Bill', 'Kates', null, 3560.23));
  }

  submit(coder: Coder) {
    this.svc.save(coder).subscribe(
      res => console.log('done', res),
      err => console.log('error', err)
    );
  }

  ngOnInit(): void {
  }
}
