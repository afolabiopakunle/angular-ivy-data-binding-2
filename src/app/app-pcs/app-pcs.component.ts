import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pcs',
  templateUrl: './app-pcs.component.html',
  styleUrls: ['./app-pcs.component.css']
})
export class AppPcsComponent implements OnInit {
  @Input() element: {name?: string, type?: string, content?: string}
  constructor() { }

  ngOnInit() {
  }

}