// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable, tap } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   private apiUrl = 'http://localhost:3000'; // כתובת ה־backend שלך

//   constructor(private http: HttpClient) {}

//   // התחברות – שולחת email וסיסמה ומקבלת token
//   login(credentials: { email: string; password: string }): Observable<{ success: boolean; token: string }> {
//     return this.http.post<{ success: boolean; token: string }>(
//       `${this.apiUrl}/login`,
//       credentials
//     ).pipe(
//       tap(res => {
//         if (res.success && res.token) {
//           // שומר את הטוקן ב־localStorage
//           localStorage.setItem('token', res.token);
//         }
//       })
//     );
//   }

//   // שולף את ה־token מה־localStorage
//   getToken(): string | null {
//     return localStorage.getItem('token');
//   }

//   // בודק אם המשתמש מחובר
//   isLoggedIn(): boolean {
//     return !!this.getToken();
//   }

//   // התנתקות – מוחק את ה־token
//   logout(): void {
//     localStorage.removeItem('token');
//   }
// }
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // התחברות – שולחת email וסיסמה ומקבלת token ותפקיד
  login(credentials: { email: string; password: string }): Observable<{ success: boolean; token: string; role: string }> {
    return this.http.post<{ success: boolean; token: string; role: string }>(
      `${this.apiUrl}/login`,
      credentials
    ).pipe(
      tap(res => {
        if (res.success && res.token) {
          // שומר את הטוקן והrole ב־localStorage
          localStorage.setItem('token', res.token);
          localStorage.setItem('role', res.role);
        }
      })
    );
  }

  // שולף את ה־token מה־localStorage
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // שולף את ה־role מה־localStorage
  getRole(): string | null {
    return localStorage.getItem('role');
  }

  // בודק אם המשתמש מחובר
  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  // בודק אם המשתמש בעל role מסוים
  hasRole(expectedRole: string): boolean {
    const role = this.getRole();
    return role === expectedRole;
  }

  // התנתקות – מוחק את ה־token והrole
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  }
}

