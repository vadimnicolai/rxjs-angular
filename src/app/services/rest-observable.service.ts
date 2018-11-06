import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export default class RestObservableService /* implements HttpInterceptor */ {
  headers: HttpHeaders;
  options: any;

  /* 
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'q=0.8;application/json;q=0.9' });
    const clone = req.clone({ headers });
    return next.handle(clone);
  }
  */

  baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'q=0.8;application/json;q=0.9' });
    this.options = ({ headers: this.headers });
  }

  private handleError(error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return throwError(errMsg);
  }

  // GET
  getPosts(): Observable<any> {
    return this.http
      .get(this.baseUrl + '/posts', this.options)
    // .catchError(this.handleError);
    // With the new HttpClient, .map is no more.
  }

  getSpecificComments(): Observable<any> {
    return this.http
      .get(this.baseUrl + '/posts/3/comments', this.options)
    // .catch(this.handleError);
  }

  getUsers(): Observable<any> {
    return this.http
      .get(this.baseUrl + '/users', this.options)
    // .catch(this.handleError);
  }

  getUsersPosts(): Observable<any> {
    return this.http
      .get(this.baseUrl + '/users/1/posts', this.options)
    // .catch(this.handleError);
  }

  // POST
  postPosts(param: any): Observable<any> {
    const body = JSON.stringify(param);
    return this.http
      .post(this.baseUrl + '/posts', body, this.options)
    // .catch(this.handleError);
  }

  // PUT
  putPosts(param: any): Observable<any> {
    const body = JSON.stringify(param);
    return this.http
      .put(this.baseUrl + '/posts/1', body, this.options)
    // .catch(this.handleError);
  }

  // PATCH
  patchPosts(param: any): Observable<any> {
    const body = JSON.stringify(param);
    return this.http
      .patch(this.baseUrl + '/posts/2', body, this.options)
    // .catch(this.handleError);
  }

  // DELETE
  deletePosts(): Observable<any> {
    return this.http
      .delete(this.baseUrl + "/posts/1", this.options)
    // .catch(this.handleError);
  }
}
