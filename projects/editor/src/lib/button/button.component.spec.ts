import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AeButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: AeButtonComponent;
  let fixture: ComponentFixture<AeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AeButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
