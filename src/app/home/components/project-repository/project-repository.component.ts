import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-repository',
  templateUrl: './project-repository.component.html',
  styleUrls: ['./project-repository.component.scss']
})
export class ProjectRepositoryComponent implements OnInit {
repodata =[
  {"id":1,"project_name":"Titanic","DatasetPath":"/titanic"},
  {"id":1,"project_name":"Credit card Defaultor","DatasetPath":"/titanic"},
  {"id":1,"project_name":"Prediction","DatasetPath":"/titanic"},
  {"id":1,"project_name":"Titanic","DatasetPath":"/titanic"}, 
]
  constructor() { }

  ngOnInit(): void {
  }
  toggle(data){
    console.log(data.id)
    console.log(data.project_name)
  }
}
