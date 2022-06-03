import { TestBed } from '@angular/core/testing';

import { BaseWebService } from './base-webservice.service';

describe('BaseWebserviceService', () => {
  let service: BaseWebService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseWebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
