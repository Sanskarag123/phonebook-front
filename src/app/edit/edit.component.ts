import { Component, OnInit, Input,OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import{BackendService} from '../backend.service'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit,OnChanges {

  constructor(private back:BackendService,private route: ActivatedRoute) { }
  public First;
  public Last;
  public number;
  public Email;
  public location;
  public contact={'First':this.First,'Last':this.Last,'number':this.number,'Email':this.Email,'location':this.location}
public id;
  ngOnChanges(change:SimpleChanges){
   
    
  }

  ngOnInit() {
 
    this.route.queryParams.subscribe((res)=>{
      console.log(res);
      this.First=res.First;
      this.Last=res.Last;
      this.number=res.number;
      this.Email=res.Email;
      this.location=res.location;
      this.id=res._id;
      
    })
  }
  update()
  {let contact={'id':this.id,'First':this.First,'Last':this.Last,'number':this.number,'Email':this.Email,'location':this.location}
    console.log(contact)
    this.back.update(contact).subscribe((res)=>
    {
      console.log(res)
    })
  }
 
}




