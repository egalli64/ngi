import { TestBed } from '@angular/core/testing';

import { CoderService } from './coder.service';

describe('CodersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoderService = TestBed.get(CoderService);
    expect(service).toBeTruthy();
  });
});
