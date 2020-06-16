import { Component, OnInit, Output, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-repository',
  templateUrl: './project-repository.component.html',
  styleUrls: ['./project-repository.component.scss']
})
export class ProjectRepositoryComponent implements OnInit {
  // @ViewChild(HeaderComponent) child;
  @Output() messageEvent = new EventEmitter<string>();
  myInputMessage: string = "hi";
  message:string = "Input feild";
  projectname: any;
  header: boolean = false;
  datasetpath: string;
  searchText:string='';
  project_name=[];
  repodata = [
    { "id": 1, "project_name": "Titanic", "DatasetPath": "/titanic", "label": 'a', "selected": false },
    { "id": 2, "project_name": "Credit card Defaultor", "DatasetPath": "/titanic", "label": 'a', "selected": false },
    { "id": 3, "project_name": "Prediction", "DatasetPath": "/titanic", "label": 'a', "selected": false },
    { "id": 4, "project_name": "Micro", "DatasetPath": "/titanic", "label": 'a', "selected": false },
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
  repositorydata = [];
  id:any;
  index:any;
  indexarray = [];
  checkedarray = [];
  names:any;
  namearray=[];
  constructor(public router: Router
    ) { }

  ngOnInit(): void {
    this.repositorydata = this.repodata;
    console.log(this.repositorydata);
    this.messageEvent.emit(this.message);
    console.log(this.messageEvent);
  }
  ngAfterViewInit() {
    // this.projectname = this.child.outputMessage;
    // console.log(this.projectname);
  }
  toggle(data, event) {
     this.id = data.id;
     this.projectname = data.project_name;
 
     this.datasetpath = data.DatasetPath;
     console.log(this.datasetpath);
    console.log('data',data);
    console.log(event.target.checked);
    this.projectchecked = event.target.checked;
    for(let i=0 ;i<this.repodata.length;i++){

    }
    console.log(this.repodata)
    
    if(this.projectchecked == true){
      let name={
          id:this.id,
          project_name:this.projectname + '_copy',
          DatasetPath: this.datasetpath,
          label:"a",
          selected: false,
      }
      this.names = name;
      console.log('name',name);
      this.namearray.push(this.names);
      this.checkedarray.push(name); 
      console.log(this.checkedarray);
      // for(let i=0;i<this.checkedarray.length;i++){
      this.index = this.repodata.findIndex(x => x.project_name === this.projectname);
      console.log(this.index);
      // }
      this.indexarray.push(this.index);
      console.log(this.indexarray);
            }

      // this.repodata.splice(this.index + 1,0, name); 
      console.log(this.repodata);
    
      // this.repodata.push(name);
    //   else if(this.projectchecked == false){
    //   this.repodata.pop();
    // }
    console.log(data.id)
    console.log(data.project_name);
    this.projectname = data.project_name;
    console.log(this.projectname);
    if(this.projectchecked == true){
    this.project_name.push(this.projectname);
    console.log(this.project_name);
    }
    else if(this.projectchecked === false){
      console.log(this.projectchecked);
      this.project_name.pop();
      console.log(this.project_name);
    }
    this.datasetpath = data.DatasetPath;
    // this.myInputMessage = "Titanic";
    this.header = true;

  }
  addproject() {
    this.form = true;
    this.copyForm = false;
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
    this.copyForm = true;
    this.form = false;
    console.log(viewreceiptmodal);
    // if(this.projectchecked == false ){
    this.id_no = id;
    this.projectName = project_name;
    this.Dataset_Path = DatasetPath
    console.log(this.id_no);
    console.log(this.projectName);
    console.log(this.Dataset_Path);
    // }
  }
  copy() {
    this.copyForm = true;
    this.form = false;
    // if(this.projectchecked == true){
    //   let name={
    //       id:this.id,
    //       project_name:this.projectname + '_copy',
    //       DatasetPath: this.datasetpath,
    //       label:"a",
    //       selected: false
    //   }
    //   console.log('name',name);
    //   this.checkedarray.push(name); 
    //   console.log(this.checkedarray);
    // //  for(let i=0;i<this.indexarray.length;i++){
    //   this.repodata.splice(this.index + 1,0, name); 
    //   console.log(this.repodata);
    //   // }
    // }
    //   // this.repodata.push(name);
    //   else if(this.projectchecked == false){
    //   this.repodata.pop();
    // }
    if(this.checkedarray.length == 1){
      this.repodata.splice(this.index + 1,0, this.names); 
    }
    if(this.indexarray.length > 1){
    for(let i=0;i<this.indexarray.length;i++){
      console.log(this.indexarray[i]);
    this.repodata.splice(this.indexarray[i] + i + 1 ,0, this.checkedarray[i]);
    }
    }
  }
  copyclose() {
    this.copyForm = false;
  }
  selectstore(data) {
    console.log(data);
    this.router.navigate([data]);
    console.log(this.projectchecked);
    if (this.projectchecked == true && data) {
      this.routerData = data;
    }
  }
  searchValue(value: any): void {
    let searchId: string = this.searchText.toLowerCase();
    this.repositorydata = this.repodata.filter(function(val, ind, arr){
      var status = (
        ( val.project_name !== undefined && val.project_name !== null && val.project_name.toLowerCase().indexOf(searchId) !== -1 ));
        return status;
    });
  }
}
