import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentInterestsComponent } from './sent-interests.component';

describe('SentInterestsComponent', () => {
  let component: SentInterestsComponent;
  let fixture: ComponentFixture<SentInterestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SentInterestsComponent]
    });
    fixture = TestBed.createComponent(SentInterestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
