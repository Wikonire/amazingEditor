import { TestBed } from '@angular/core/testing';

import { AeAnimationService } from './animation.service';

describe('AnimationService', () => {
  let service: AeAnimationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AeAnimationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
