import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { User07Component } from './user07.component';

describe('User07Component', () => {
  let component: User07Component;
  let fixture: ComponentFixture<User07Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ User07Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(User07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
