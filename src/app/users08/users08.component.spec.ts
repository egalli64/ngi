import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Users08Component } from './users08.component';

describe('Users08Component', () => {
  let component: Users08Component;
  let fixture: ComponentFixture<Users08Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Users08Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Users08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
