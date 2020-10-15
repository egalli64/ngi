import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { CoderService } from './coder.service';

describe('CodersService', () => {
  let service: CoderService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [CoderService]
  }));

  it('should be created', () => {
    service = TestBed.inject(CoderService);
    expect(service).toBeTruthy();
  });
});
