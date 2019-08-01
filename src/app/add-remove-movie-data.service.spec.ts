import { TestBed } from '@angular/core/testing';

import { AddRemoveMovieDataService } from './add-remove-movie-data.service';

describe('AddRemoveMovieDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddRemoveMovieDataService = TestBed.get(AddRemoveMovieDataService);
    expect(service).toBeTruthy();
  });
});
