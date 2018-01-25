import { TestBed, inject } from '@angular/core/testing';

import { ClientListService } from './client.service';

describe('ClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientListService]
    });
  });

  it('should be created', inject([ClientListService], (service: ClientListService) => {
    expect(service).toBeTruthy();
  }));
});
