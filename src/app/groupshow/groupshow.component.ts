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


}
