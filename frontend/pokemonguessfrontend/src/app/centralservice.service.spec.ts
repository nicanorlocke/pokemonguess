import { TestBed } from '@angular/core/testing';

import { CentralserviceService } from './centralservice.service';

describe('CentralserviceService', () => {
  let service: CentralserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CentralserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
