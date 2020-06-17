import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dataset-summary',
  templateUrl: './dataset-summary.component.html',
  styleUrls: ['./dataset-summary.component.scss']
})
export class DatasetSummaryComponent implements OnInit {
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

}
