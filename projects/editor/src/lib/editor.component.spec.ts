import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AeEditorComponent } from './editor.component';

describe('EditorComponent', () => {
  let component: AeEditorComponent;
  let fixture: ComponentFixture<AeEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AeEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AeEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
