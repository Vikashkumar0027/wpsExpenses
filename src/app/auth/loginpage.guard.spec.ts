import { TestBed } from '@angular/core/testing';

import { LoginpageGuard } from './loginpage.guard';

describe('LoginpageGuard', () => {
  let guard: LoginpageGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginpageGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
