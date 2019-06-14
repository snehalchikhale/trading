import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SharedService } from '../../../service/shared.service';

export interface DialogData {
  animal: string;
  name: string;
  }


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  animal: string;
  name: string;
  margin_left:number=230;

  constructor(public dialog: MatDialog,private shared:SharedService) { }

  addNewPage(): void {
  const dialogRef = this.dialog.open(AddNewPagePopup, {
  width: '50%',
  data: {name: this.name, animal: this.animal}
  });
  
  dialogRef.afterClosed().subscribe(result => {
  console.log('The dialog was closed');
  this.animal = result;
  });
  }
  
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
  selector: 'add-new-page-popup',
  templateUrl: 'add-new-page-popup.html',
  })
  export class AddNewPagePopup {
  
  constructor(
  public dialogRef: MatDialogRef<AddNewPagePopup>,
  @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  
  onNoClick(): void {
  this.dialogRef.close();
  }
  
  }
