import { TestBed } from '@angular/core/testing';

import { MathService } from './math.service';

describe('MathService', () => {
  let service: MathService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MathService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should negate', () => {
    const result = service.negate(42);

    expect(result).toBe(-42);
  });

  it('should fail, by intentional mistake', () => {
    const result = service.negate(42);

    expect(result).toBe(42);
  });

  it('should be skipped', () => {
    pending();
  });
});
