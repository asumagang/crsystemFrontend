import { TestBed } from '@angular/core/testing';

import { ProgramserviceService } from './programservice.service';

describe('ProgramserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProgramserviceService = TestBed.get(ProgramserviceService);
    expect(service).toBeTruthy();
  });
});
