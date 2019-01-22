import { TestBed } from '@angular/core/testing';

import { DisplayAllCDService } from '../display-all-cd.service';

describe('DisplayAllCDService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DisplayAllCDService = TestBed.get(DisplayAllCDService);
    expect(service).toBeTruthy();
  });
});
