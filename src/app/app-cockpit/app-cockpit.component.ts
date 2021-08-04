import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './app-cockpit.component.html',
  styleUrls: ['./app-cockpit.component.css']
})
export class AppCockpitComponent implements OnInit {
  @Output() addPC = new EventEmitter<{name: string, content: string}>();
  @Output() addServer = new EventEmitter<{name: string, content: string}>();
  newServerName = '';
  newServerContent = '';
  constructor(){}

  ngOnInit(){}

  addPCFunc() {
    this.addPC.emit({
      name: this.newServerName,
      content: this.newServerContent
    })
  }

  addServerFunc() {
    this.addServer.emit({
      name: this.newServerName,
      content: this.newServerContent
    })
  }
}