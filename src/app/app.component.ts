import { Component } from '@angular/core';
import {NavigationStart, Router} from "@angular/router";
declare var jQuery: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title : string;
  constructor(private router :Router){
    this.title = 'VS Instruments';
    this.router.events.subscribe((e)=>{
      if(e instanceof NavigationStart){
        console.log("test navigation"+window.screen.width);
        if(window.screen.width<600)
        jQuery("#menubtn").click();
      }
    });
  }
}
