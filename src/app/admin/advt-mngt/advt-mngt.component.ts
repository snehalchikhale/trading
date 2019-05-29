import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../service/shared.service';

@Component({
  selector: 'app-advt-mngt',
  templateUrl: './advt-mngt.component.html',
  styleUrls: ['./advt-mngt.component.css']
})
export class AdvtMngtComponent implements OnInit {

  constructor(private shared:SharedService) { }
  margin_left:number=230;
  // data:string='Dashboard';
  ngOnInit() {

    this.shared.aToggleEvent.subscribe((data:string) => {
      console.log('check', data);
      if(data=='Ok'){
        this.margin_left=60;
      }else{
        this.margin_left = 230;
      }
    });
  }

}
