import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNew19Component } from './user-new19.component';

describe('UserNew19Component', () => {
  let component: UserNew19Component;
  let fixture: ComponentFixture<UserNew19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserNew19Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNew19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
