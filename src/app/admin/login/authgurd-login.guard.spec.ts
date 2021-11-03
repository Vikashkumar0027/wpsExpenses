import { TestBed } from '@angular/core/testing';

import { AuthgurdLoginGuard } from './authgurd-login.guard';

describe('AuthgurdLoginGuard', () => {
  let guard: AuthgurdLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthgurdLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
