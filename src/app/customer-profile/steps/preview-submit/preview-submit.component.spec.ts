import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewSubmitComponent } from './preview-submit.component';

describe('PreviewSubmitComponent', () => {
  let component: PreviewSubmitComponent;
  let fixture: ComponentFixture<PreviewSubmitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreviewSubmitComponent]
    });
    fixture = TestBed.createComponent(PreviewSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
