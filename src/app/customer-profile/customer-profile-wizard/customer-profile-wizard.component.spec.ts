import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerProfileWizardComponent } from './customer-profile-wizard.component';

describe('CustomerProfileWizardComponent', () => {
  let component: CustomerProfileWizardComponent;
  let fixture: ComponentFixture<CustomerProfileWizardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerProfileWizardComponent]
    });
    fixture = TestBed.createComponent(CustomerProfileWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
