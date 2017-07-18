import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {NavigationlinkComponent} from './navigationlink/navigationlink.component';
import {FooterComponent} from "./footer/footer.component";
import {ProductsComponent} from "./products/products.component";
import { RouterModule, Routes} from "@angular/router";
import {Homepage} from "./homepage/homepage.component";
import {Productpage} from "./productpage/productpage.component";
import {Servicepage} from "./servicepage/servicepage.component";
import {Contactuspage} from "./contactus/contactus.component";
import {Aboutuspage} from "./aboutuspage/aboutuspage.component";
import {Institutepage} from "./institute/institute.component";

const appRouters: Routes=[
 // {path :'', redirectTo: '/home', component : AppComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component:  Homepage},
  {path : 'products', component: Productpage},
  {path : 'service', component : Servicepage},
  {path : 'contactus', component : Contactuspage},
  {path : 'aboutus', component : Aboutuspage},
  {path : 'institute', component : Institutepage}
  ];
@NgModule({
  declarations: [
    AppComponent,
    Homepage,
    Productpage,
    Servicepage,
    Contactuspage,
    Aboutuspage,
    Institutepage,
    NavigationlinkComponent,
    ProductsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRouters,{enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
