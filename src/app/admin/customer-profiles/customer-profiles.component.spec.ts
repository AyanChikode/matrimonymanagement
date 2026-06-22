import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerProfilesComponent } from './customer-profiles.component';

describe('CustomerProfilesComponent', () => {
  let component: CustomerProfilesComponent;
  let fixture: ComponentFixture<CustomerProfilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerProfilesComponent]
    });
    fixture = TestBed.createComponent(CustomerProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
