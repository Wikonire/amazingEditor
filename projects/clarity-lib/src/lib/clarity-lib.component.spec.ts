import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClarityLibComponent } from './clarity-lib.component';

describe('ClarityLibComponent', () => {
  let component: ClarityLibComponent;
  let fixture: ComponentFixture<ClarityLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClarityLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClarityLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
