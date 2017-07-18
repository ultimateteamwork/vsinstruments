import {Component, HostListener, Inject} from '@angular/core';
import {DOCUMENT} from "@angular/platform-browser";
declare var $:any;
  /**
 * Created by mduraimani on 7/12/2017.
 */
@Component({
  selector: 'app-navigation',
  templateUrl: './navigationlink.component.html',
  styleUrls: ['./navigationlink.component.css']
})
export class NavigationlinkComponent {

 /* constructor(@Inject(DOCUMENT) private document: Document){
  }

  @HostListener("window:scroll", [])
  onwindowScroll() {
    let scrolledHeight = this.document.body.scrollTop;
    if(scrolledHeight>10){
      $(this.document.getElementById("header") ).addClass('fixed-top');
    }
    else{
      $(this.document.getElementById("header") ).removeClass('fixed-top');
    }
  }*/
}
