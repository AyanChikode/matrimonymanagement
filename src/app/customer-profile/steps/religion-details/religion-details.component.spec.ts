import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReligionDetailsComponent } from './religion-details.component';

describe('ReligionDetailsComponent', () => {
  let component: ReligionDetailsComponent;
  let fixture: ComponentFixture<ReligionDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReligionDetailsComponent]
    });
    fixture = TestBed.createComponent(ReligionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
