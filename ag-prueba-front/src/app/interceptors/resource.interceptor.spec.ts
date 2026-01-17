import { TestBed } from '@angular/core/testing';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ResourceInterceptor } from './resource.interceptor';
import { TokenService } from '../services/token.service';

describe('ResourceInterceptor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });
});
