import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../service/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private shared:SharedService) { }
  toggleClick:boolean=true;
  msg:string='Ok';
  ngOnInit() {
  }
  openToggel(){
    console.log(3434);
    if(this.toggleClick){
      this.toggleClick = false;
      this.msg = 'Ok';
    }else{
      this.toggleClick=true;
      this.msg = 'Not Ok';
    }
    this.shared.toggle(this.msg);
  }
}
