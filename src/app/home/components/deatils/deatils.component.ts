import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deatils',
  templateUrl: './deatils.component.html',
  styleUrls: ['./deatils.component.scss']
})
export class DeatilsComponent implements OnInit {
  projectdata =[
    {"name":"Type","ID":"numeric","age":"string","education":"string"},
    {"name":"Type","ID":"numeric","age":"string","education":"string"},
    {"name":"Type","ID":"numeric","age":"string","education":"string"},
    {"name":"Type","ID":"numeric","age":"string","education":"string"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
