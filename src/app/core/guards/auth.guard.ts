import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    if (localStorage.getItem('empToken')) {
      // User is authenticated, allow access to the login page
      return true;
    } else {
      // User is not authenticated, redirect to a different page (e.g., home page)
      this.router.navigate(['/']);
      return false;
    }
  }
}
