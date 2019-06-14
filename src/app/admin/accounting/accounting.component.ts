import { Component, OnInit, Inject } from '@angular/core';
import { SharedService } from '../../service/shared.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
  }
  


@Component({
  selector: 'app-accounting',
  templateUrl: './accounting.component.html',
  styleUrls: ['./accounting.component.css']
})
export class AccountingComponent implements OnInit {
  animal: string;
  name: string;

  constructor(private shared:SharedService,public dialog: MatDialog) { }
  addOrder(): void {
    const dialogRef = this.dialog.open(AddOrderPopup, {
    width: '30%',
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
  selector: 'add-order-popup',
  templateUrl: 'add-order-popup.html',
  })
  export class AddOrderPopup {
  
  constructor(
  public dialogRef: MatDialogRef<AddOrderPopup>,
  @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  
  onNoClick(): void {
  this.dialogRef.close();
  }
  
  }
