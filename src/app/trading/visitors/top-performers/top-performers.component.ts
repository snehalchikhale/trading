import { Component, OnInit } from '@angular/core';
import { PerfectScrollbarConfigInterface,
  PerfectScrollbarComponent, PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';

@Component({
  selector: 'app-top-performers',
  templateUrl: './top-performers.component.html',
  styleUrls: ['./top-performers.component.css']
})
export class TopPerformersComponent implements OnInit {
 
  constructor() { }
  public config: PerfectScrollbarConfigInterface = {};

  ngOnInit() {
  }

}
