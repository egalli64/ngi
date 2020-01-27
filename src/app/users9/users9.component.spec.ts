import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Users9Component } from './users9.component';

describe('Users9Component', () => {
  let component: Users9Component;
  let fixture: ComponentFixture<Users9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Users9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Users9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
