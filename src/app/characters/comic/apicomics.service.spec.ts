import { TestBed } from '@angular/core/testing';

import {ApicomicsService } from './apicomics.service';



describe('ApicomicsService', () => {
  let service2: ApicomicsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service2 = TestBed.inject(ApicomicsService);
  });

  it('should be created', () => {
    expect(service2).toBeTruthy();
  });
});
