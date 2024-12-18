import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "../auth.service";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private _authService: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{

      const token = this._authService.getToken();

      console.log('token: ', token)
      console.log('REQ:', req)
      if(token){
        const cloned = req.clone({
          headers: req.headers.set('Authorization', 'Bearer ' + token)
        })

        return next.handle(cloned);
      }

      return next.handle(req);
    }
        
    

}