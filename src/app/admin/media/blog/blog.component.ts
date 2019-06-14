import { Component, OnInit,Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SharedService } from '../../../service/shared.service';

export interface DialogData {
  animal: string;
  name: string;
  }

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  animal: string;
  name: string;

  constructor(public dialog: MatDialog,private shared:SharedService) { }
  addNewBlogs(): void {
  const dialogRef = this.dialog.open(AddNewBlogPopup, {
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
  selector: 'add-new-blog-popup',
  templateUrl: 'add-new-blog-popup.html',
  })
  export class AddNewBlogPopup{
  
  constructor(
  public dialogRef: MatDialogRef<AddNewBlogPopup>,
  @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  
  onNoClick(): void {
  this.dialogRef.close();
  }
  
  }