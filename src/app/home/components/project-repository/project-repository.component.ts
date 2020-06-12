import { Component, OnInit, Output, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
@Component({
  selector: 'app-project-repository',
  templateUrl: './project-repository.component.html',
  styleUrls: ['./project-repository.component.scss']
})
export class ProjectRepositoryComponent implements OnInit {
  @ViewChild(HeaderComponent) child;

  myInputMessage: string = "hi";
  projectname: any;
  header: boolean = false;
  datasetpath: string;
  repodata = [
    { "id": 1, "project_name": "Titanic", "DatasetPath": "/titanic", "label": 'a', "selected": false },
    { "id": 2, "project_name": "Credit card Defaultor", "DatasetPath": "/titanic", "label": 'a', "selected": false },
    { "id": 3, "project_name": "Prediction", "DatasetPath": "/titanic", "label": 'a', "selected": false },
    { "id": 4, "project_name": "Titanic", "DatasetPath": "/titanic", "label": 'a', "selected": false },
  ];
  action =[
    {"id":"1","name":"Deatils"},
    {"id":"2","name":"EDA"},
    {"id":"3","name":"Data-preprocessing"},
    {"id":"4","name":"Feature-Engineering"},
    {"id":"5","name":"Predict"},
    {"id":"6","name":"Download"},
    {"id":"7","name":"Delete"},
  ]
  model: any = {};
  form: boolean = false;
  copyform: boolean = false;
  datavalue: any;
  datasetform: boolean = false;
  datapath: boolean = false;
  searchbox = false;
  projectchecked: boolean = false;
  id_no: string;
  projectName: string;
  Dataset_Path: string;
  copyForm: boolean = false;
  routerData: any;
  actionName:any;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    // this.projectname = this.child.outputMessage;
    // console.log(this.projectname);
  }
  toggle(data, event) {
    console.log(event.target.checked);
    this.projectchecked = event.target.checked;
    console.log(data.id)
    console.log(data.project_name);
    this.projectname = data.project_name;
    console.log(this.projectname);
    this.datasetpath = data.DatasetPath;
    this.myInputMessage = "Titanic";
    this.header = true;

  }
  addproject() {
    this.form = true;
  }
  changeData(data) {
    console.log(data.target.value);
    this.datavalue = data.target.value;
    if (this.datavalue == "dataset") {
      this.datasetform = true;
      this.datapath = false;
    } else if (this.datavalue == "datafile") {
      this.datasetform = false;
      this.datapath = true;
    }
  }
  onSubmit() {

  }
  closeform() {
    this.form = false;
  }
  selectAll(event) {
    console.log(event);
    const checked = event.target.checked;
    this.repodata.forEach(item => item.selected = checked);
  }
  search() {
    this.searchbox = true;
  }
  editDetail(viewreceiptmodal, id: string, project_name: string, DatasetPath: string) {
    console.log(viewreceiptmodal);
    this.id_no = id;
    this.projectName = project_name;
    this.Dataset_Path = DatasetPath
    console.log(this.id_no);
    console.log(this.projectName);
    console.log(this.Dataset_Path);
  }
  copy() {
    this.copyForm = true;
  }
  copyclose() {
    this.copyForm = false;
  }
  selectstore(data) {
    console.log(data);
    console.log(this.projectchecked);
    if (this.projectchecked == true && data) {
      this.routerData = data;
    }
    if(this.actionName=this.action.find((obj)=>{
      console.log(obj);
      obj.name == data;
    })){
      console.log(this.actionName.name); 
    }
  }
}
