import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirAttrComponent } from './dir-attr.component';

describe('DirAttrComponent', () => {
  let component: DirAttrComponent;
  let fixture: ComponentFixture<DirAttrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirAttrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirAttrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
