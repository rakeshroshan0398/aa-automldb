import { Component, OnInit , ViewChild , ViewChildren , QueryList , AfterViewInit} from '@angular/core';
import { TabsetComponent, TabDirective } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-deatils',
  templateUrl: './deatils.component.html',
  styleUrls: ['./deatils.component.scss']
})
export class DeatilsComponent implements OnInit {
  disableSwitching: boolean;
  @ViewChild('tabset') tabset: TabsetComponent;
  projectdata =[
    {"name":"Type","ID":"numeric","age":"string","education":"string"},
    {"name":"Type","ID":"numeric","age":"string","education":"string"},
    {"name":"Type","ID":"numeric","age":"string","education":"string"},
    {"name":"Type","ID":"numeric","age":"string","education":"string"},
    {"name":"Type","ID":"numeric","age":"string","education":"string"},
    {"name":"Type","ID":"numeric","age":"string","education":"string"},
    {"name":"Type","ID":"numeric","age":"string","education":"string"},
    {"name":"Type","ID":"numeric","age":"string","education":"string"},
  ]
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    console.log(this.tabset.tabs);
  }

  goto(id){
    this.tabset.tabs[id].active = true;
  }
}
