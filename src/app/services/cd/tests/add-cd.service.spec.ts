import { TestBed } from '@angular/core/testing';

import { AddCDService } from '../add-cd.service';

describe('AddCDService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddCDService = TestBed.get(AddCDService);
    expect(service).toBeTruthy();
  });
});
