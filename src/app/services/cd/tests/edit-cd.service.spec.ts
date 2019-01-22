import { TestBed } from '@angular/core/testing';

import { EditCDService } from '../edit-cd.service';

describe('EditCDService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditCDService = TestBed.get(EditCDService);
    expect(service).toBeTruthy();
  });
});
