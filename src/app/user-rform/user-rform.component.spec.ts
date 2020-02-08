import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRFormComponent } from './user-rform.component';

describe('UserRFormComponent', () => {
  let component: UserRFormComponent;
  let fixture: ComponentFixture<UserRFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
