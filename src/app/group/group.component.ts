import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit,OnChanges {
public groupdetail={'gropname':'','contacts':[]};
  constructor(private back:BackendService) { }
  public l1=[];
  public gp;
  public l2=[]
  @Input() data={'groupname':'','contact':[]}
  public i=0;
  ngOnChanges()
  {
    
  }

  ngOnInit() {
    this.connect();
  }
  
  connect()
  {
    this.back.retrieve().subscribe((res)=>{
      this.l1=res

    })
  }
  onclick1(item)
  {let obj={}
  
this.data.contact.push(item)
console.log(this.data)


console.log(item)
  }
  send()
  {
    this.back.groupcreate(this.data).subscribe((res)=>{
      console.log(res)

    })
  }


}
