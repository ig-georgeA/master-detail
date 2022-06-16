import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Northwind_JasonService } from './northwind_jason.service';

describe('Northwind_JasonService', () => {
  let service: Northwind_JasonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(Northwind_JasonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
