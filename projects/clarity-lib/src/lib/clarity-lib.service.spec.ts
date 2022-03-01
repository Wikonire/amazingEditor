import { TestBed } from '@angular/core/testing';

import { ClarityLibService } from './clarity-lib.service';

describe('ClarityLibService', () => {
  let service: ClarityLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClarityLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
