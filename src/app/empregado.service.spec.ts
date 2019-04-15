import { TestBed } from '@angular/core/testing';

import { EmpregadoService } from './empregado.service';

describe('EmpregadoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmpregadoService = TestBed.get(EmpregadoService);
    expect(service).toBeTruthy();
  });
});
