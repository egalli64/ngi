import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { User09Component } from './user09.component';

describe('User09Component', () => {
  let component: User09Component;
  let fixture: ComponentFixture<User09Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ User09Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(User09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
