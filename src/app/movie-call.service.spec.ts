import { TestBed } from '@angular/core/testing';

import { MovieCallService } from './movie-call.service';

describe('MovieCallService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieCallService = TestBed.get(MovieCallService);
    expect(service).toBeTruthy();
  });
});
