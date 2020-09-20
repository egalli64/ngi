import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoderSaveComponent } from './coder-save.component';

describe('CoderSaveComponent', () => {
  let component: CoderSaveComponent;
  let fixture: ComponentFixture<CoderSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoderSaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoderSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
