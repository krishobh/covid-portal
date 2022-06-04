import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { finalize, Observable, throwError } from 'rxjs';
import { LoaderService } from '../services/loader.service';
import { catchError, map, tap } from 'rxjs/operators';
import { NotificationService } from '../services/notification.service';
import { Router } from '@angular/router';

@Injectable()
export class InterceptorServiceInterceptor implements HttpInterceptor {

  constructor(private loaderService: LoaderService, private notificationService: NotificationService, private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.setLoading(true, request.url);
    
    let tokenizedReq = request.clone({
      setHeaders: {
        'X-RapidAPI-Host': 'covid-193.p.rapidapi.com',
		    'X-RapidAPI-Key': 'cbdf8f4b51mshfbd43e98b753cbep1c98f0jsn6e0419c39e6a'
      }
    })
   
    return next.handle(tokenizedReq).pipe(
      catchError(this.handleError.bind(this)),
      finalize(() => this.loaderService.setLoading(false, request.url)),
    )
  }

  handleError = (errorResponse: any) => {
    if (errorResponse instanceof HttpErrorResponse) {
      if (errorResponse.status === 401) {
          this.router.navigate(['pageNotFound'])
      } 
      else if (errorResponse.status === 500) {
          this.notificationService.showError(
            `${errorResponse.status} - Internal server error`, 'server error'
          );
          console.log(
            '%c Internal server error.......',
            'background: #222; color: #ff0000'
          );
      } 
      else if (errorResponse.status === 404) {
          this.notificationService.showError('API - 404 Not Found', 'api error');
      } 
      else if (
          errorResponse &&
          errorResponse.error &&
          errorResponse.error.length
      ) {
          this.notificationService.showError(`${errorResponse.error}`, 'error');
      }
    }

    // return throwError(errorResponse);
    throw new Error(errorResponse);
  }
}
