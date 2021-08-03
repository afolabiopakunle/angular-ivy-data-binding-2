import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './app-cockpit.component.html',
  styleUrls: ['./app-cockpit.component.css']
})
export class AppCockpitComponent implements OnInit {
  @Output() addPC = new EventEmitter();
  newServerName = '';
  newServerContent = '';
  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
    this.addPC.emit({
      name: this.newServerName,
      content: this.newServerContent
    })
  }

  onAddBlueprint() {
    this.addPC.emit({
      name: this.newServerName,
      content: this.newServerContent
    })
  }
}