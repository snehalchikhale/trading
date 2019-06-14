import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../service/shared.service';

@Component({
  selector: 'app-user-mngt',
  templateUrl: './user-mngt.component.html',
  styleUrls: ['./user-mngt.component.css']
})
export class UserMngtComponent implements OnInit {

  constructor(private shared:SharedService) { }
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
