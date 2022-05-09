import { TestBed } from '@angular/core/testing';

import { FundingMockService } from './funding-mock.service';

describe('FundingMockService', () => {
  let service: FundingMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FundingMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
