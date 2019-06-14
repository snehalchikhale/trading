import { Component} from '@angular/core';
import { SharedService } from '../../service/shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent{
   panelOpenState = false;

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
