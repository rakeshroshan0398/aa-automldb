import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() myinputMsg:string;
  @Input() dataMsg:string;
  datamessage = false; 
  constructor(
    public router: Router
    ) { }

  ngOnInit(): void {
    console.log(this.myinputMsg);
    console.log(this.dataMsg)
    if(this.dataMsg){
        this.datamessage = true;
    }
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
