import { Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SharedService } from '../../../service/shared.service';


export interface DialogData {
  animal: string;
  name: string;
  }

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  animal: string;
  name: string;

constructor(public dialog: MatDialog,private shared:SharedService) { }
addNewNews(): void {
const dialogRef = this.dialog.open(AddNewNewsPopup, {
width: '50%',
data: {name: this.name, animal: this.animal}
});

dialogRef.afterClosed().subscribe(result => {
console.log('The dialog was closed');
this.animal = result;
});
}

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

@Component({
  selector: 'add-new-news-popup',
  templateUrl: 'add-new-news-popup.html',
  })
  export class AddNewNewsPopup {
  
  constructor(
  public dialogRef: MatDialogRef<AddNewNewsPopup>,
  @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  
  onNoClick(): void {
  this.dialogRef.close();
  }
  
  }