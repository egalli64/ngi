import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hello9Component } from './hello9.component';

describe('Hello9Component', () => {
  let component: Hello9Component;
  let fixture: ComponentFixture<Hello9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hello9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Hello9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
