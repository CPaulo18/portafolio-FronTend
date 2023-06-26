import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { UserService } from '../service/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private apiSerivice: UserService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = this.apiSerivice.getToken();

    if (token) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`),
      });

      return next.handle(cloned);
    } else {
      return next.handle(req);
    }
  }
}
