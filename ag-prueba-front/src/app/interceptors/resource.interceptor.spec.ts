import { TestBed } from '@angular/core/testing';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ResourceInterceptor } from './resource.interceptor';
import { TokenService } from '../services/token.service';

describe('ResourceInterceptor', () => {
  let interceptor: ResourceInterceptor;
  let tokenService: TokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResourceInterceptor, TokenService],
    });
    interceptor = TestBed.inject(ResourceInterceptor);
    tokenService = TestBed.inject(TokenService);
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });
});
