import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, EMPTY, empty, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService{

  authUrl = 'https://sso.klccuhibcc.com/api/v1/authcheck';
  redirectUrl = 'https://sso.klccuhibcc.com/login/facility';

  constructor(private http: HttpClient, private router: Router) {
    
  }

  async intercept(request: HttpRequest<any>, next: HttpHandler): Promise<Observable<HttpEvent<any>>> {
    const token = localStorage.getItem('access_token');
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    return next.handle(request);
  }


  logout() {
    localStorage.clear();
    window.location.href = this.redirectUrl;
  }

  isLoggedIn() {
    const accessToken = localStorage.getItem('access_token');
    if(accessToken){
        this.checkToken(accessToken).pipe(catchError(()=>{
          return throwError(() => {this.logout()});
        })).subscribe((data)=>{
          if(data.status_code == "200") {
            localStorage.setItem('user', JSON.stringify(data.data.user))
            this.router.navigate(['/']);
          }
          else {
            this.logout();
          }
        });
    }
    else {
      this.handleAuthCallback();
    }
  }

  checkToken(accessToken:string): Observable<any> {
      let headers = new HttpHeaders();
      headers = headers.set('Authorization', `Bearer ${accessToken}`);
      return this.http.get(this.authUrl, {headers});
  }

  handleAuthCallback() {
    const user = new URLSearchParams(window.location.search).get('user');
    const accessToken = new URLSearchParams(window.location.search).get('accessToken');

    if (user && accessToken) {

      let strippedAccessToken = accessToken.replace(/^"(.+(?="$))"$/, '$1');

      localStorage.setItem('user', user);
      localStorage.setItem('access_token', strippedAccessToken);
      
      this.checkToken(strippedAccessToken).pipe(catchError(()=>{
        return throwError(() => {this.logout()});
      })).subscribe({
        next: (data)=>{
          if(data.status_code == "200") {
            localStorage.setItem('user', JSON.stringify(data.data.user))
            this.router.navigate(['/']);
          }
          else {
            this.logout();
          }
        } 
      });
     
    } else {
      this.logout();
    }
  }


}
