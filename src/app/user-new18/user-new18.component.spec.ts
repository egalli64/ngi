import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNew18Component } from './user-new18.component';

describe('UserNew18Component', () => {
  let component: UserNew18Component;
  let fixture: ComponentFixture<UserNew18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserNew18Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNew18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
