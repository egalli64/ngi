import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Users27Component } from './users27.component';
import { User17Component } from '../user17/user17.component';

describe('Users27Component', () => {
  let component: Users27Component;
  let fixture: ComponentFixture<Users27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Users27Component, User17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Users27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
