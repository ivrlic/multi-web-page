import { TestBed } from '@angular/core/testing';

import { GreatPersonasService } from './great-personas.service';

describe('GreatPersonasService', () => {
  let service: GreatPersonasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GreatPersonasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
