import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutualMatchesComponent } from './mutual-matches.component';

describe('MutualMatchesComponent', () => {
  let component: MutualMatchesComponent;
  let fixture: ComponentFixture<MutualMatchesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MutualMatchesComponent]
    });
    fixture = TestBed.createComponent(MutualMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
