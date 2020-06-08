import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-repository',
  templateUrl: './project-repository.component.html',
  styleUrls: ['./project-repository.component.scss']
})
export class ProjectRepositoryComponent implements OnInit {
repodata =[
  {"project_name":"Titanic","DatasetPath":"/titanic"},
  {"project_name":"Credit card Defaultor","DatasetPath":"/titanic"},
  {"project_name":"Prediction","DatasetPath":"/titanic"},
  {"project_name":"Titanic","DatasetPath":"/titanic"}, 
]
  constructor() { }

  ngOnInit(): void {
  }

}
