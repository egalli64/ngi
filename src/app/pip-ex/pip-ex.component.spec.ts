import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipExComponent } from './pip-ex.component';

describe('PipExComponent', () => {
  let component: PipExComponent;
  let fixture: ComponentFixture<PipExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipExComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
