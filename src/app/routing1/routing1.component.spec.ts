import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Routing1Component } from './routing1.component';

describe('Routing1Component', () => {
  let component: Routing1Component;
  let fixture: ComponentFixture<Routing1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Routing1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Routing1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
