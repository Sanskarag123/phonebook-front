import { Component, OnInit } from '@angular/core';
import{BackendService}from '../backend.service'
import{Router} from '@angular/router'
import {Observable} from 'rxjs'

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor(private back:BackendService,private rout:Router) { }
  private l1=[{}]


  ngOnInit() {
    this.back.retrieve().subscribe(res=>{
      console.log(res)
      this.l1=res
    })
  }
  sort()
  {var i;
    for(i=0;i<this.l1.length;i++)
    {

    }
  }
  onclick(item)
  {console.log(item)
    this.back.delete(item).subscribe((res)=>{
console.log("deleted")
    })
  }
  onclick1(item)
  {console.log(item)
    this.back.detail(item)
    this.rout.navigate(['/edit'],{queryParams:item})
  }


}
