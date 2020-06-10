import { Component, OnInit,Input, Output,EventEmitter  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() myinputMsg:string;
  @Input() dataMsg:string;
  @Output() myOutput:EventEmitter<string>= new EventEmitter(); 
  outputMessage:string="I am child component." 
  projectname:string="";
  datamessage = false; 
  constructor(
    public router: Router
    ) { }

  ngOnInit(): void {
    
  }
  send(){
    console.log('input',this.myinputMsg);
    this.projectname = this.myinputMsg;
   console.log(this.projectname);
   // this.outputMessage = this.myinputMsg;
   console.log('output',this.projectname);
   this.myOutput.emit(this.projectname);
   console.log(this.myOutput);
   // if(this.dataMsg){
   //     this.datamessage = true;
   // }
  }
  navigateTo(path) {
    this.router.navigate([path]);
  }

  isInstore(){
    return this.router.url.indexOf("ins-") !== -1 || this.router.url.indexOf("instore") !== -1;
  }

  isActiveLink(link){
    return this.router.url == link;
  }

}
