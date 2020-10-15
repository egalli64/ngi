import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Users17Component } from './users17.component';
import { User17Component } from '../user17/user17.component';

describe('Users17Component', () => {
  let component: Users17Component;
  let fixture: ComponentFixture<Users17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Users17Component, User17Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Users17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
