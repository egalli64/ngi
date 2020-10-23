import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirStrutComponent } from './dir-strut.component';

describe('DirStrutComponent', () => {
  let component: DirStrutComponent;
  let fixture: ComponentFixture<DirStrutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirStrutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirStrutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
