import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestObservableService {
  headers: HttpHeaders;
  options: any;
  baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'q=0.8;application/json;q=0.9' });
    this.options = ({ headers: this.headers });
  }

  getPosts(): Observable<any> {
    return this.http
      .get(this.baseUrl + '/posts', this.options)
    // .catchError(this.handleError);
    // With the new HttpClient, .map is no more.
  }
}
