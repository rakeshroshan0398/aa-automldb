import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(function() {
      $("p").click(function() {
         // remove classes from all
         $("p").removeClass("active");
         $("i").removeClass("active");
         // add class to the one we clicked
         $(this).addClass("active");
      });
   });
  }

}
