import { TestBed } from '@angular/core/testing';

import { SignupbeService } from './signupbe.service';

describe('SignupbeService', () => {
  let service: SignupbeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignupbeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
