import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Users8Component } from './users8.component';

describe('UsersComponent', () => {
  let component: Users8Component;
  let fixture: ComponentFixture<Users8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Users8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Users8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
