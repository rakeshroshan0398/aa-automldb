import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{ 
experimentrepsitory = false;
router: string;
// path(){
//   this.experimentrepsitory = true;
// }
constructor(private _router: Router){

  this.router = _router.url; 
}
}

