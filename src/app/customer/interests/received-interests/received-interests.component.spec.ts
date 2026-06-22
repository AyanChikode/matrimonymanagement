import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivedInterestsComponent } from './received-interests.component';

describe('ReceivedInterestsComponent', () => {
  let component: ReceivedInterestsComponent;
  let fixture: ComponentFixture<ReceivedInterestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceivedInterestsComponent]
    });
    fixture = TestBed.createComponent(ReceivedInterestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
