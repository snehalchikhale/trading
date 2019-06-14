import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../service/shared.service';

@Component({
  selector: 'app-features-control',
  templateUrl: './features-control.component.html',
  styleUrls: ['./features-control.component.css']
})
export class FeaturesControlComponent implements OnInit {

  constructor(private shared:SharedService) { }
  margin_left:number=230;
  // data:string='Dashboard';
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
