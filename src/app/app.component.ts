import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  serverElements = [{
    type: 'blueprint',
    name: 'Afolabi',
    content: 'welcome home Afolabi Oluseun Opakunle'
  }];


}
