import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../../shared/services/api.service';
@Component({
  selector: 'app-add-experiment',
  templateUrl: './add-experiment.component.html',
  styleUrls: ['./add-experiment.component.scss']
})
export class AddExperimentComponent implements OnInit {
  model: any = {};
  datasetform: boolean = false;
  datapath: boolean = false;
  datavalue: any;

  constructor(private apiservice:ApiService) { }

  ngOnInit(): void {
  }
  onSubmit(model) {
    console.log(model);
   let experimentForm = {
      //  "id": this.id,
       "project_name":model.project_name,
       "DatasetPath":model.Dataset_Path,
       "Datasettypes":model.data,
       "Experiment_Type":model.Experiment_Type,
       "label": 'a', 
       "selected": false
   }
   console.log(experimentForm);
  //  this.repodata.push(experimentForm);
  //  console.log(this.repodata);
   }
   selectstore(event){

   }
   changeData(data) {
    console.log(data.target.value);
    this.datavalue = data.target.value;
    if (this.datavalue == "Path") {
      this.datasetform = true;
      this.datapath = false;
    } else if (this.datavalue == "File") {
      this.datasetform = false;
      this.datapath = true;
    }
  }
  submit(){
    this.apiservice.Submit();
    console.log(this.apiservice.Submit()
    )
    // // .subscribe((response)=>{
    // //   console.log(response);
    // })
  }
}
