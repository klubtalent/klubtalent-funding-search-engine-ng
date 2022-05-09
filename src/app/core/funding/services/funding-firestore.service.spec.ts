import {TestBed} from '@angular/core/testing';

import {FundingFirestoreService} from './funding-firestore.service';

describe('FundingFirestoreService', () => {
  let service: FundingFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FundingFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
