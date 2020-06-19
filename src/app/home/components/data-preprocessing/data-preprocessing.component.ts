// import { Component, OnInit } from '@angular/core';
import { Component, OnInit, Input, OnChanges, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WorkExperience } from './data.model';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-data-preprocessing',
  templateUrl: './data-preprocessing.component.html',
  styleUrls: ['./data-preprocessing.component.scss']
})
export class DataPreprocessingComponent implements OnInit {

  dropdownSettings = {
    singleSelection: false,
    idField: 'item_id',
    textField: 'item_text',
    itemsShowLimit: 3,
    allowSearchFilter: true,
    enableCheckAll: false

  };

  dropdownList = [
    { item_id: 1, item_text: 'Column 1', item_type: 'String' },
    { item_id: 2, item_text: 'Column 2', item_type: 'Number' },
    { item_id: 3, item_text: 'Column 3', item_type: 'String' },
    { item_id: 4, item_text: 'Column 4', item_type: 'Number' },
  ];

  treatments = [
    { id: 1, name: 'Change Data Types'},
    { id: 2, name: 'Remove Null Values'},
    { id: 3, name: 'Impute Null Values'},
    { id: 4, name: 'Outlier Treatment'},
    { id: 5, name: 'Remove Low Variance'},
    { id: 6, name: 'Encoding'},
    { id: 7, name: 'Transformation'}
  ];

  selectedFeatures = [];
  selectedTreatment: string = '';
  isOpt1: boolean = false;
  isOpt2: boolean = false;
  isOpt3: boolean = false;
  isOpt4: boolean = false;
  isOpt5: boolean = false;
  isOpt6: boolean = false;
  isOpt7: boolean = false;

  pastExpForm: FormGroup;
  hideExperience: boolean = true;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
      this.pastExpForm = this.fb.group({
          pastWorkExps: this.fb.array([])
      });
  }

  get pastWorkExps(): FormArray {
      return this.pastExpForm.get('pastWorkExps') as FormArray;
  };


  addWorkExperience() {
      this.pastWorkExps.push(this.fb.group(new WorkExperience()));
  }

  removeWorkExperience(i) {
      this.pastWorkExps.removeAt( i );
  }

  clearFormArray = () => {
    while (this.pastWorkExps.length !== 0) {
      this.pastWorkExps.removeAt(0);
    }
  }


  onDeSelect(item: any) {
    let ind;
    this.selectedFeatures.forEach((obj, i) => {
      if( obj.item_id == item.item_id ) {
        ind = i;
        return false;
      }
    });
    this.selectedFeatures.splice(ind, 1);
    this.removeWorkExperience(ind);
  }
  onItemSelect(item: any) {
    this.selectedFeatures.push(item);
    this.validateAndLoadForm();
  }
  onSelectAll(items: any) {
    this.selectedFeatures.push(items);
    this.validateAndLoadForm();
  }

  changeTreatment(name){
    this.selectedTreatment = name;
    this.isOpt1 = false;
    this.isOpt2 = false;
    this.isOpt3 = false;
    this.isOpt4 = false;
    this.isOpt5 = false;
    this.isOpt6 = false;
    this.isOpt7 = false;
    switch(name){
      case 'Change Data Types': this.isOpt1 = true; break;
      case 'Remove Null Values': this.isOpt2 = true; break;
      case 'Impute Null Values': this.isOpt3 = true; break;
      case 'Outlier Treatment': this.isOpt4 = true; break;
      case 'Remove Low Variance': this.isOpt5 = true; break;
      case 'Encoding': this.isOpt6 = true; break;
      case 'Transformation': this.isOpt7 = true; break;
    }
    // this.validateAndLoadForm();
  }

  validateAndLoadForm(){
    if( this.selectedTreatment && this.selectedFeatures.length ) {
      this.loadDynamicInputs();
    } else {
      this.clearFormArray();
    }
  }

  loadDynamicInputs(){
    this.clearFormArray();
    this.selectedFeatures.forEach(col => {
      this.addWorkExperience();
    })
  }

  isNumeric(i) {
    return this.dropdownList.find(o => o.item_id == this.selectedFeatures[i]['item_id']).item_type == 'Number';
  }

}
