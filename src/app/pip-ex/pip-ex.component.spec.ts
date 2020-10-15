import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipExComponent } from './pip-ex.component';
import { MyPipe } from '../my.pipe';

describe('PipExComponent', () => {
  let component: PipExComponent;
  let fixture: ComponentFixture<PipExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipExComponent, MyPipe ]
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
