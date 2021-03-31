import { TestBed } from '@angular/core/testing';

import { JikanServiceService } from './jikan-service.service';

describe('JikanServiceService', () => {
  let service: JikanServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JikanServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
