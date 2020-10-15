import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { User } from '../user.model';

import { User17Component } from './user17.component';

describe('User17Component', () => {
  let component: User17Component;
  let fixture: ComponentFixture<User17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ User17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(User17Component);
    component = fixture.componentInstance;
    component.user = new User('Bob', 42);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
