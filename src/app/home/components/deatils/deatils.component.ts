import { Component, OnInit , ViewChild , ViewChildren , QueryList , AfterViewInit,ViewEncapsulation} from '@angular/core';
import { TabsetComponent, TabDirective } from 'ngx-bootstrap/tabs';
declare var $: any;

@Component({
  selector: 'app-deatils',
  templateUrl: './deatils.component.html',
  styleUrls: ['./deatils.component.scss'],
  encapsulation: ViewEncapsulation.None,
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
  dataData:boolean = true;
  profileData = false;
  constructor() { }

  ngOnInit(): void {
    $(function() {
      $("a").click(function() {
         // remove classes from all
         $("a").removeClass("active");
        //  $("i").removeClass("active");
         // add class to the one we clicked
         $(this).addClass("active");
      });
   });
  }
  // ngAfterViewInit(){
  //   console.log(this.tabset.tabs);
  // }
  dataset(){
   this.dataData = true;
   this.profileData = false;
  }
  Pandas(){
    this.dataData = false;
    this.profileData = true;
  }
  goto(id){
    this.tabset.tabs[id].active = true;
  }
}
