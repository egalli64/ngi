import { TestBed } from '@angular/core/testing';

import { CodersService } from './coders.service';

describe('CodersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CodersService = TestBed.get(CodersService);
    expect(service).toBeTruthy();
  });
});
