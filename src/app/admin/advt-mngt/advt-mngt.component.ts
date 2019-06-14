import { Component, OnInit , Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { SharedService } from '../../service/shared.service';


export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-advt-mngt',
  templateUrl: './advt-mngt.component.html',
  styleUrls: ['./advt-mngt.component.css']
})
export class AdvtMngtComponent implements OnInit {
  animal: string;
  name: string;

  uploadAd(): void {
    const dialogRef = this.dialog.open(UploadAdPopup, {
      width: '50%',
      data: {name: this.name}
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  addAdv(): void {
    const dialogRef = this.dialog.open(AddAdvPopup, {
      width: '50%',
      data: {name: this.name}
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  constructor(private shared:SharedService,
    public dialog: MatDialog) { }
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
  selector: 'add-adv-popup',
  templateUrl: 'add-adv-popup.html',
})
export class AddAdvPopup {

  constructor(
    public dialogRef: MatDialogRef<AddAdvPopup>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}


@Component({
  selector: 'upload-ad-popup',
  templateUrl: 'upload-ad-popup.html',
})
export class UploadAdPopup {

  constructor(
    public dialogRef: MatDialogRef<UploadAdPopup>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}