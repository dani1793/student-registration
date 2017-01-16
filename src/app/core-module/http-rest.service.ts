import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpModule, Http, Response} from "@angular/http";

@Injectable()
export class HttpRestService {

  constructor(private http:Http) { }

  public get(url: string):Observable<any>{
    return this.http.get(url)
      .map(this.extractData)
      .catch(this.handleError)
  }


  public post(body:any, url:string):Observable<any> {
    return this.http.post(url, body)
      .map(this.extractData)
      .catch(this.handleError)
  }


  public put(body:any, url:string):Observable<any> {
    return this.http.put(url, body)
      .map(this.extractData)
      .catch(this.handleError)
  }

  public delete(body:any, url:string):Observable<any> {
    return this.http.delete(url, body)
      .map(this.extractData)
      .catch(this.handleError)
  }


  private extractData(res: Response) {
    console.log(res);
    let body = res.json();
    console.log(body);
    return body || { };
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }


  public getBaseUrl (): String {
    return 'http://localhost:3000/';
  }



}
