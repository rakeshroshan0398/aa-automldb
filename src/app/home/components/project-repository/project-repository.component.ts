import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-project-repository',
  templateUrl: './project-repository.component.html',
  styleUrls: ['./project-repository.component.scss']
})
export class ProjectRepositoryComponent implements OnInit {
  myInputMessage ="hi";
  projectname:string;
  header:boolean =false;
  datasetpath:string;  
  repodata =[
  {"id":1,"project_name":"Titanic","DatasetPath":"/titanic"},
  {"id":2,"project_name":"Credit card Defaultor","DatasetPath":"/titanic"},
  {"id":3,"project_name":"Prediction","DatasetPath":"/titanic"},
  {"id":4,"project_name":"Titanic","DatasetPath":"/titanic"}, 
]
  constructor() { }

  ngOnInit(): void {
  }
  toggle(data){
    console.log(data.id)
    console.log(data.project_name);
    this.projectname = data.project_name;
    console.log(this.projectname);
    this.datasetpath = data.DatasetPath;
    this.myInputMessage ="Titanic";
    this.header = true;
  }
}
