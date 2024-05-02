import { TestBed } from '@angular/core/testing';

import { AllbackendapiService } from './allbackendapi.service';

describe('AllbackendapiService', () => {
  let service: AllbackendapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllbackendapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
