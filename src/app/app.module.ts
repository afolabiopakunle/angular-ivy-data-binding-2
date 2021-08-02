import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppCockpitComponent } from './app-cockpit/app-cockpit.component';
import { AppPcsComponent } from './app-pcs/app-pcs.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, AppCockpitComponent, AppPcsComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
