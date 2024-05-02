import { TestBed } from '@angular/core/testing';

import { LoginbeService } from './loginbe.service';

describe('LoginbeService', () => {
  let service: LoginbeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginbeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
