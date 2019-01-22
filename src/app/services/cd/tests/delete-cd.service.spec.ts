import { TestBed } from '@angular/core/testing';

import { DeleteCDService } from '../delete-cd.service';

describe('DeleteCDService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeleteCDService = TestBed.get(DeleteCDService);
    expect(service).toBeTruthy();
  });
});
