import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature-engineering',
  templateUrl: './feature-engineering.component.html',
  styleUrls: ['./feature-engineering.component.scss']
})
export class FeatureEngineeringComponent implements OnInit {
  featuredata =[
    {"features":"Passenger ID","Type":"int","default_transformation":"Log","custom_transformation":"Inverse"},
    {"features":"Name","Type":"str","default_transformation":"squre","custom_transformation":"CubeRoot"},
    {"features":"Ticket Price","Type":"int","default_transformation":"squre root","custom_transformation":"Log"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
