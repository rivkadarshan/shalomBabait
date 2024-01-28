import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent{

  public message:string = 'האם אתה בטוח?';

  @Output() public onYes :EventEmitter<void> = new EventEmitter<void>();
  @Output() public onNo :EventEmitter<void> = new EventEmitter<void>();

  constructor(private router:Router,private dialogRef: MatDialogRef<ConfirmDialogComponent>,@Inject(MAT_DIALOG_DATA) private data:string)
    {
    this.message=data;
    }
    public onCancelClick(){
      this.onNo.emit();
      this.dialogRef.close();
    }
  
    public onOkClick(){
      this.dialogRef.close();
      this.onYes.emit()
    }
}
