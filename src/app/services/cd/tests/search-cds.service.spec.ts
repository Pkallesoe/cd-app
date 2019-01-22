import { TestBed } from '@angular/core/testing';

import { SearchCDsService } from '../search-cds.service';

describe('SearchCDsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchCDsService = TestBed.get(SearchCDsService);
    expect(service).toBeTruthy();
  });
});
