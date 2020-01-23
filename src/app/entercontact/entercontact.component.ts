import { Component, OnInit } from '@angular/core';
import{BackendService}from '../backend.service'


@Component({
  selector: 'app-entercontact',
  templateUrl: './entercontact.component.html',
  styleUrls: ['./entercontact.component.css']
})
export class EntercontactComponent implements OnInit {
public contact={'First':'','Last':'','number':'','Email':'','location':''}

  constructor(private back:BackendService) { }

  ngOnInit() {
  }

  send()
  {
    this.back.create(this.contact).subscribe((res)=>
      {
        
        
        console.log(res)

      }
    )
  }

}
