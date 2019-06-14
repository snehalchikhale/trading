import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../service/shared.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  constructor(private shared:SharedService) { }
  margin_left:number=230;
  data:string='Dashboard';
  ngOnInit() {

    this.shared.aToggleEvent.subscribe((data:string) => {
      console.log('check', data);
      if(data=='Ok'){
        this.margin_left=75;
      }else{
        this.margin_left = 230;
      }
    });

    this.shared.showComponentEvent.subscribe((data:string) => {
      console.log('Data', data);
      this.data = data;
    });
  }

}
