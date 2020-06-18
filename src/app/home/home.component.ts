import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
// import {  HeaderComponent } from '../home/components/header/header.component';
// import { ProjectRepositoryComponent } from './components/project-repository/project-repository.component'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,AfterViewInit {
  // @ViewChild(HeaderComponent) child;
  // @ViewChild(ProjectRepositoryComponent) child2;
  myInputMessage:any;
  // message:any;
  constructor() { }

  ngOnInit(): void {
  }
  GetChildData(data){  
    console.log('data1',data);  
    // this.message = data;
 } 
 ngAfterViewInit() {
  // this.myInputMessage = this.child2.message;
  // console.log(this.myInputMessage);
}
}
