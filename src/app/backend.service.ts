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
private url6="http://localhost:3000/api/deletegc"
private url7="http://localhost:3000/api/addtogrp"
private url8="http://localhost:3000/api/deletegrp"
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
  deletegrpc(data)
  {
    return this.http.post<any>(this.url6,data)
  }
  groupadd(data)
  {
    return this.http.post<any>(this.url7,data)
  }
  deletegrp(data)
  {
return this.http.post<any>(this.url8,data)
  }
  detail(item)
  {
this.edititem=item;
  }
  
}

