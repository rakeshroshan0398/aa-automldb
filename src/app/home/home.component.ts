import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import {  HeaderComponent } from '../home/components/header/header.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild(HeaderComponent) child;
  outputMessage:string;
  constructor() { }

  ngOnInit(): void {
  }
  GetChildData(data){  
    console.log(data);  
 } 
 ngAfterViewInit() {
  this.outputMessage = this.child.outputMessage;
  console.log(this.outputMessage);
}
}
