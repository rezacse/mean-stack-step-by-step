import { TestBed, inject } from '@angular/core/testing';

import { AppHttpService } from './app-http.service';

describe('AppHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppHttpService]
    });
  });

  it('should be created', inject([AppHttpService], (service: AppHttpService) => {
    expect(service).toBeTruthy();
  }));
});
