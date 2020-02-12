import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Routing3Component } from './routing3.component';

describe('Routing3Component', () => {
  let component: Routing3Component;
  let fixture: ComponentFixture<Routing3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Routing3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Routing3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
