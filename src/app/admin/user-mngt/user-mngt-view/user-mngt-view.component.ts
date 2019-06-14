import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../service/shared.service';
import { PerfectScrollbarConfigInterface,
  PerfectScrollbarComponent, PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';

@Component({
  selector: 'app-user-mngt-view',
  templateUrl: './user-mngt-view.component.html',
  styleUrls: ['./user-mngt-view.component.css']
})
export class UserMngtViewComponent implements OnInit {

  constructor(private shared:SharedService) { }
  public config: PerfectScrollbarConfigInterface = {};

  margin_left:number=230;
  ngOnInit() {

    this.shared.aToggleEvent.subscribe((data:string) => {
      console.log('check', data);
      if(data=='Ok'){
        this.margin_left=75;
      }else{
        this.margin_left = 230;
      }
    });
  }

}
