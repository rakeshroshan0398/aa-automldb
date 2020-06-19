import { Component, OnInit } from '@angular/core';
// import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
// import { DymamicColumn } from './data.model';
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
    { item_id: 1, item_text: 'Column 1' },
    { item_id: 2, item_text: 'Column 2' },
    { item_id: 3, item_text: 'Column 3' },
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

  // dynamicFormGroup: FormGroup;

  constructor(
    // private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  // createForm() {
  //     this.dynamicFormGroup = this.fb.group({
  //         dynamicColumns: this.fb.array([])
  //     });
  // }
  //
  // get dynamicColumns(): FormArray {
  //     return this.dynamicFormGroup.get('dynamicColumns') as FormArray;
  // };
  //
  //
  // addDynamicColumn() {
  //     this.dynamicColumns.push(this.fb.group(new DymamicColumn()));
  // }
  //
  // removeDynamicColumn(i) {
  //     this.dynamicColumns.removeAt( i );
  // }


  onDeSelect(item: any) {
    this.selectedFeatures.push(item);
    this.validateAndLoadForm();
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
    this.validateAndLoadForm();
  }

  validateAndLoadForm(){
    if( this.selectedTreatment != "0" && this.selectedFeatures.length ) {
      this.loadDynamicInputs();
    }
  }

  loadDynamicInputs(){

  }

}
