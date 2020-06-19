import { Component, OnInit, Output, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { Router } from '@angular/router';
import { createOfflineCompileUrlResolver } from '@angular/compiler';

@Component({
  selector: 'app-project-repository',
  templateUrl: './project-repository.component.html',
  styleUrls: ['./project-repository.component.scss']
})
export class ProjectRepositoryComponent implements OnInit {
  // @ViewChild(HeaderComponent) child;
  @Output() messageEvent = new EventEmitter<string>();
  myInputMessage: string = "hi";
  message: string = "Input feild";
  projectname: any;
  header: boolean = false;
  datasetpath: string;
  searchText: string = '';
  project_name = [];
  repodata = [
    { "id": 0, "project_name": "Titanic", "DatasetPath": "/titanic","Experiment_Type":"Regression","label": 'a', "selected": false },
    { "id": 1, "project_name": "Credit card Defaultor", "DatasetPath": "/titanic","Experiment_Type":"Classification", "label": 'a', "selected": false },
    { "id": 2, "project_name": "Prediction", "DatasetPath": "/titanic","Experiment_Type":"Regression", "label": 'a', "selected": false },
    { "id": 3, "project_name": "Micro", "DatasetPath": "/titanic","Experiment_Type":"Classification", "label": 'a', "selected": false },
  ];
  action = [
    { "id": "1", "name": "Deatils" },
    { "id": "2", "name": "EDA" },
    { "id": "3", "name": "Data-preprocessing" },
    { "id": "4", "name": "Feature-Engineering" },
    { "id": "5", "name": "Predict" },
    { "id": "6", "name": "Download" },
    { "id": "7", "name": "Delete" },
  ]
  model: any = {};
  form: boolean = false;
  copyform: boolean = false;
  datavalue: any;
  datasetform: boolean = false;
  datapath: boolean = false;
  searchbox = false;
  projectchecked: boolean = false;
  id_no: number;
  projectName: string;
  Dataset_Path: string;
  copyForm: boolean = false;
  noneditable: boolean = true;
  routerData: any;
  actionName: any;
  repositorydata = [];
  id: any;
  index: any;
  indexarray = [];
  checkedarray = [];
  names: any;
  namearray = [];
  array = [];
  objectIndex: any;
  constructor(public router: Router
  ) { }
  dataSource = this.repodata;
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
    console.log('data', data);
    console.log(event.target.checked);
    this.projectchecked = event.target.checked;
    for (let i = 0; i < this.repodata.length; i++) {

    }
    console.log(this.repodata)

    if (this.projectchecked == true) {
      let name = {
        id: this.id,
        project_name: this.projectname + '_copy',
        DatasetPath: this.datasetpath,
        label: "a",
        selected: false,
      }
      this.names = name;
      console.log('name', name);
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
    if (this.projectchecked == true) {
      this.project_name.push(this.projectname);
      console.log(this.project_name);
    }
    else if (this.projectchecked === false) {
      console.log(this.projectchecked);
      this.project_name.pop();
      console.log(this.project_name);
      this.index = this.repodata.findIndex(x => x.project_name === this.projectname);
      this.indexarray.splice(0, 1);
      console.log(this.indexarray);
      console.log(this.index);
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
  onSubmit(model) {
   console.log(model);
  let experimentForm = {
      "id": this.id,
      "project_name":model.project_name,
      "DatasetPath":model.Dataset_Path,
      "Experiment_Type":model.Experiment_Type,
      "label": 'a', 
      "selected": false
  }
  console.log(experimentForm);
  this.repodata.push(experimentForm);
  console.log(this.repodata);
  }
  closeform() {
    this.form = false;
  }
  selectAll(event) {
    console.log(event);
    const checked = event.target.checked;
    this.repodata.forEach(item => item.selected = checked);
    console.log(this.indexarray);
    if (checked == true) {
      for (let i = 0; i < this.repodata.length; i++) {
        this.project_name.push(this.repodata[i].project_name);
        let name = {
          id: this.id,
          project_name: this.repodata[i].project_name + '_copy',
          DatasetPath: this.repodata[i].DatasetPath,
          label: "a",
          selected: false,
        }
        console.log(name);
        this.indexarray.push(i);
        this.index = this.repodata.findIndex(x => x.project_name === this.projectname);
        console.log(this.index);
        // this.names = name;
        //   console.log('name', name);
        //   this.namearray.push(this.names);
        this.checkedarray.push(name);
        console.log(this.checkedarray);
        // console.log(this.indexarray);
      }
      console.log(this.project_name);
      console.log(this.indexarray);

    } else if (checked == false) {
      this.project_name = [];
      this.indexarray = [];
    }
  }
  search() {
    this.searchbox = true;
  }
  editDetail(viewreceiptmodal, id: number, project_name: string, DatasetPath: string) {
    this.noneditable = false;
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
  displayAllDetails(index: number): boolean {
    return index === this.id_no;
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
    if (this.indexarray.length == 1) {
      this.repodata.splice(this.index + 1, 0, this.names);
      this.indexarray.pop();
    }
    if (this.indexarray.length > 1) {
      for (let i = 0; i < this.indexarray.length; i++) {
        console.log(this.indexarray);
        this.repodata.splice(this.indexarray[i] + i + 1, 0, this.checkedarray[i]);
      }
      this.checkedarray = [];
      this.indexarray = [];
      console.log(this.checkedarray);
      console.log(this.indexarray);
    }
  }
  copyclose() {
    this.copyForm = false;
  }
  clearDisplayIndex() {
    this.id_no = -1;
  }
  update(row_obj) {

    this.dataSource = this.dataSource.filter((value, key) => {
      console.log('update1')
      if (value.id == this.id_no) {
        value.project_name = this.projectName;
        console.log('update2')
      }
      return true;
    });
    this.id_no = -1;
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
    this.repositorydata = this.repodata.filter(function (val, ind, arr) {
      var status = (
        (val.project_name !== undefined && val.project_name !== null && val.project_name.toLowerCase().indexOf(searchId) !== -1));
      return status;
    });
  }
  delete() {
    console.log(this.index);
    if (this.indexarray.length == 1) {
      this.repodata.splice(this.index, 1);
      this.indexarray.pop();
    } else if (this.indexarray.length > 1) {
      for (let i = 0; i < this.indexarray.length; i++) {
        console.log(this.indexarray[i]);
        // console.log(this.array= this.checkedarray.splice(this.index,1));
        this.repodata.splice(this.checkedarray[i], 1);
        // delete this.repodata[this.indexarray[i]];
      }
      this.indexarray = [];
    }
  }
}
