/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LexService } from './lex.service';

describe('Service: Lex', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LexService]
    });
  });

  it('should ...', inject([LexService], (service: LexService) => {
    expect(service).toBeTruthy();
  }));
});
