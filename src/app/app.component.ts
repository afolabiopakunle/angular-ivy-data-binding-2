import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  serverElements = [{
    type: 'server',
    name: 'Afolabi',
    content: 'welcome home Afolabi Oluseun Opakunle'
  }, {
      type: 'blueprint',
      name: 'Olubadan',
      content: 'God has made Afolabi a king'
    }
  ];

  pcAdded(data) {
    this.serverElements.push({
      type: 'blueprint',
      name: data.name,
      content: data.content
    })
  }

  serverAdded(data) {
    this.serverElements.push({
      type: 'server',
      name: data.name,
      content: data.content
    })
  }

}
