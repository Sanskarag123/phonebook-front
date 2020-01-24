import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-groupshow',
  templateUrl: './groupshow.component.html',
  styleUrls: ['./groupshow.component.css']
})
export class GroupshowComponent implements OnInit,OnChanges {

  constructor(private back:BackendService) { }
  public obj=[{'contact':[],'groupname':''}]
  @Input() sho=false
  @Input() san=false
  public l1=[]
  
  ngOnChanges()
  {

  }

  ngOnInit() {
    this.back.groupretrieve().subscribe((res)=>
    {
      console.log(res)
      this.obj=res

    })
  }
  show()
  {
    this.sho=!this.sho;
  }
  onclick12(item)
  {
    this.back.deletegrpc(item).subscribe((res)=>{
      console.log(res)

    })
    window.location.reload()
    
  }
  add()
  {this.san=!this.san
    this.back.retrieve().subscribe(res=>{
      console.log(res)
      this.l1=res
      
    })
    
    
   
    
  }
  onclick123(item,item1)
  {
      let obj={'groupname':item1.groupname,contact:item};
      this.back.groupadd(obj).subscribe((res)=>{
        console.log(res)
      })



  }
  show1(item)
  {
    if(item)
    return true
    else
    false
  }
  deletegroup(item)
  {
this.back.deletegrp(item).subscribe((res)=>{
  console.log("deleted")
  window.location.reload()
})
  }


}
