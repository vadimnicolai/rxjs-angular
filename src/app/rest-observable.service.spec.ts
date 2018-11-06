import { TestBed } from '@angular/core/testing';

import { RestObservableService } from './rest-observable.service';

describe('RestObservableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestObservableService = TestBed.get(RestObservableService);
    expect(service).toBeTruthy();
  });
});
