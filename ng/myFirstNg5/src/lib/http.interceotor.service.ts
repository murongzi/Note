import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpInterceotorService implements HttpInterceptor {
    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let requestHead = req.clone({ headers: req.headers.set('X-CustomHeader', 'this is a test!') });

        return next.handle(requestHead)
            .do(event => {
                if (event instanceof HttpResponse) {

                }
            })
            .catch(error => {
                return Observable.of(error)
            });
    }
}
