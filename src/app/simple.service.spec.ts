import { TestBed } from '@angular/core/testing';

import { SimpleService } from './simple.service';

describe('SimpleService', () => {
  let service: SimpleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // test number
  it('should negate', () => {
    const result = service.negate(42);

    expect(result).toBe(-42);
  });

  // disable test + show failures
  it('should fail by intentional mistake', () => {
    // comment the pending call to let the test fail
    pending();

    const result = service.negate(42);
    expect(result).toBe(42);
  });
  
  // test string to contain substring
  it('should greet Tom', () => {
    const name = 'Tom';
    const result = service.hello(name);

    expect(result).toContain(name);
  });

  // test iterable
  it('should see all team members', () => {
    const names = ['Bob', 'Kim', 'Jim'];
    const result = service.team();

    names.forEach(name => {
      expect(result).toContain(name);
    });
  });
});
