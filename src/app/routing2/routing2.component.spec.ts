import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Routing2Component } from './routing2.component';

describe('Routing2Component', () => {
  let component: Routing2Component;
  let fixture: ComponentFixture<Routing2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Routing2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Routing2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
