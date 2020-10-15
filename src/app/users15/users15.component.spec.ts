import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Users15Component } from './users15.component';
import { User15Component } from '../user15/user15.component';

describe('Users15Component', () => {
  let component: Users15Component;
  let fixture: ComponentFixture<Users15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Users15Component, User15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Users15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
