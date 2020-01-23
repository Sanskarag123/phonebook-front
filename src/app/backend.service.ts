import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'
import {Observable, Subject} from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private url="http://localhost:3000/api/contact"
private url1="http://localhost:3000/api/retrieve"
private url2="http://localhost:3000/api/delete"
private url3="http://localhost:3000/api/update"
private url4="http://localhost:3000/api/createg"
private url5="http://localhost:3000/api/retrievegroup"
detail$: Observable<any>
  public det=new Subject<any>()
  constructor(private http:HttpClient) {
    this.detail$=this.det.asObservable();
   }
   public edititem;
  create(data)
  {
    return this.http.post<any>(this.url,data);
  }
  retrieve()
  {
    return this.http.get<any>(this.url1);
  }
  delete(data)
  {
    return this.http.post<any>(this.url2,data)
  }
  update(data)
  {
    return this.http.post<any>(this.url3,data)
  }
  groupcreate(data)
  {
    return this.http.post<any>(this.url4,data)
  }
  groupretrieve()
  {
    return this.http.get<any>(this.url5)
  }
  detail(item)
  {
this.edititem=item;
  }
}

