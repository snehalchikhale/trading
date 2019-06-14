import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../service/shared.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private shared:SharedService) { }
  hide:boolean=true;
  width: number=230;
  padding_left:any='18';
  panelOpenState = false;
  ngOnInit() {
    this.shared.aToggleEvent.subscribe((data:string) => {
      console.log('check', data);
      if(data=='Ok'){
        this.hide=false;
        this.width=75;
        this.padding_left='0';
      }else{
        this.hide=true;
        this.width = 230;
        this.padding_left = '18';
      }
    });
  }
  showComponent(component){

    this.shared.showComponent(component);
    
  }


}
