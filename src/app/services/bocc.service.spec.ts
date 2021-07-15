import { TestBed } from '@angular/core/testing';

import { BoccService } from './bocc.service';

describe('BoccService', () => {
  let service: BoccService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoccService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
