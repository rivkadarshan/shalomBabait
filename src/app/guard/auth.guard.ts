import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isLoggedIn()) {
    router.navigate(['/login']);
    return false;
  }

  const userRole = authService.getRole(); // מחזיר את התפקיד של המשתמש

  switch (userRole) {
    case 'admin':
      router.navigate(['/admin-dashboard']);
      break;
    case 'secretary':
      router.navigate(['/secretary-dashboard']);
      break;
    case 'therapist':
      router.navigate(['/therapist-dashboard']);
      break;
    case 'patient':
      router.navigate(['/patient-dashboard']);
      break;
    default:
      router.navigate(['/login']);
      return false;
  }

  return true; // המשתמש מחובר ויש תפקיד תקין
};
