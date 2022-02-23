import { TestBed } from '@angular/core/testing';

import { AeTooltipAnimationService } from './tooltip-animation.service';

describe('TooltipAnimationService', () => {
  let service: AeTooltipAnimationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AeTooltipAnimationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
