import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirCustComponent } from './dir-cust.component';

describe('DirCustComponent', () => {
  let component: DirCustComponent;
  let fixture: ComponentFixture<DirCustComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirCustComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirCustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
