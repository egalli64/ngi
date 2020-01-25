import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { User7Component } from './user7.component';

describe('UserComponent', () => {
  let component: User7Component;
  let fixture: ComponentFixture<User7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ User7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(User7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
