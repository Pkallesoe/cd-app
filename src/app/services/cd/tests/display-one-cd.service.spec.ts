import { TestBed } from '@angular/core/testing';

import { DisplayOneCDService } from '../display-one-cd.service';

describe('DisplayOneCDService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DisplayOneCDService = TestBed.get(DisplayOneCDService);
    expect(service).toBeTruthy();
  });
});
