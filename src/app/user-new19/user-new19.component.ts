import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../user.model';

@Component({
  selector: 'app-user-new19',
  templateUrl: './user-new19.component.html',
  styleUrls: ['./user-new19.component.css']
})
export class UserNew19Component implements OnInit {
  fgUser: FormGroup;
  submitted: boolean;

  constructor(fb: FormBuilder) {
    this.fgUser = fb.group(new User('', 0));
  }

  ngOnInit(): void {
  }

  private reset() {
    this.fgUser.setValue({ name: '', likes: 0 });
    this.submitted = false;
  }

  create() {
    console.log("New user is", this.fgUser.value);
    this.submitted = true;
    setTimeout(() => { this.reset(); }, 1000);

    // ...
  }
}
