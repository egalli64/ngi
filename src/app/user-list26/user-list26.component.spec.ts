import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserList26Component } from './user-list26.component';

describe('UserList26Component', () => {
  let component: UserList26Component;
  let fixture: ComponentFixture<UserList26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserList26Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserList26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
