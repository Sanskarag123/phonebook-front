import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-groupshow',
  templateUrl: './groupshow.component.html',
  styleUrls: ['./groupshow.component.css']
})
export class GroupshowComponent implements OnInit {

  constructor(private back:BackendService) { }
  public obj=[{'contact':[],'groupname':''}]
  public sho=false

  ngOnInit() {
    this.back.groupretrieve().subscribe((res)=>
    {
      console.log(res)
      this.obj=res

    })
  }
  show()
  {
    this.sho=true;
  }


}
