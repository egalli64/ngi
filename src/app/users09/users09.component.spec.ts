import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Users09Component } from './users09.component';
import { User09Component } from '../user09/user09.component'

describe('Users09Component', () => {
  let component: Users09Component;
  let fixture: ComponentFixture<Users09Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Users09Component, User09Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Users09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
