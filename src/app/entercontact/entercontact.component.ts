import { Component, OnInit, Input, OnChanges } from '@angular/core';
import{BackendService}from '../backend.service'


@Component({
  selector: 'app-entercontact',
  templateUrl: './entercontact.component.html',
  styleUrls: ['./entercontact.component.css']
})
export class EntercontactComponent implements OnInit,OnChanges {
public contact={'First':'','Last':'','number':'','Email':'','location':''}

  constructor(private back:BackendService) { }
@Input() FirstV=false
ngOnChanges()
{

}

  ngOnInit() {
  }


  send()
  {if(this.contact.First.length==0)
  {
    this.FirstV=true
    console.log("yes")
  }
  else{
    this.back.create(this.contact).subscribe((res)=>
      {
        
        
        console.log(res)

      }
    )
    window.location.reload();
  }
}


}
