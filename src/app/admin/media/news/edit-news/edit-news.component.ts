import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../../service/shared.service';

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.css']
})
export class EditNewsComponent implements OnInit {
  margin_left:number=230;

  constructor(private shared:SharedService) { }

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


