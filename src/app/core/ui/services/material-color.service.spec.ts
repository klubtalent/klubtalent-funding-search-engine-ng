import {TestBed} from '@angular/core/testing';

import {MaterialColorService} from './material-color.service';

describe('MaterialColorService', () => {
  let service: MaterialColorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaterialColorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
