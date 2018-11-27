import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class AppHttpService {

  constructor(private http: Http) { }

  getHeaders() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // TODO: add token

    return headers;
  }

  getRequestOptions(): RequestOptions {
    const options = new RequestOptions();
    options.headers = this.getHeaders();

    return options;
  }

  get(url: string) {
    return this.http.get(url, this.getRequestOptions());
  }

  post(url: string, data: any) {
    return this.http.post(url, data, this.getRequestOptions());
  }

}
