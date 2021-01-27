import { TestBed } from '@angular/core/testing';

import { ApicharactersService } from './apicharacters.service';

describe('ApicharactersService', () => {
  let service: ApicharactersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApicharactersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

