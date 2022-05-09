import {TestBed} from '@angular/core/testing';

import {FundingGithubService} from './funding-github.service';

describe('FundingService', () => {
  let service: FundingGithubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FundingGithubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
