import { TestBed } from '@angular/core/testing';

import { ProfileInterestService } from './profile-interest.service';

describe('ProfileInterestService', () => {
  let service: ProfileInterestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileInterestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
