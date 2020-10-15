import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { User } from '../user.model';

import { User15Component } from './user15.component';

describe('User15Component', () => {
  let component: User15Component;
  let fixture: ComponentFixture<User15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ User15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(User15Component);
    component = fixture.componentInstance;
    component.user = new User('Bob', 42);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
