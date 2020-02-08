import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Users25Component } from './users25.component';

describe('Users25Component', () => {
  let component: Users25Component;
  let fixture: ComponentFixture<Users25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Users25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Users25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
