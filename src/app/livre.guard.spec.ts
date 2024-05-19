import { TestBed } from '@angular/core/testing';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';

import { LivreGuard } from './livre.guard'; // Changed guard name

import { Observable } from 'rxjs';

describe('LivreGuard', () => {
  let guard: LivreGuard; // Changed guard name

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LivreGuard], // Changed guard name
    });

    guard = TestBed.inject(LivreGuard); // Changed guard name
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should return true or UrlTree or Observable or Promise', () => {
    const canActivateResult: boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> =
      guard.canActivate({} as ActivatedRouteSnapshot, {} as RouterStateSnapshot);

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [LivreGuard], 
      });
    });

    it('should be created', () => {
      const guard = TestBed.inject(LivreGuard); 
      expect(guard).toBeTruthy();
    });
  });
});
