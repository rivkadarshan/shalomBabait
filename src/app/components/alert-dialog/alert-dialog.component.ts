import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.css']
})
export class AlertDialogComponent {
  public message:string = 'האם אתה בטוח?';

  @Output() public onYes :EventEmitter<void> = new EventEmitter<void>();

  constructor(private dialogRef: MatDialogRef<ConfirmDialogComponent>,@Inject(MAT_DIALOG_DATA) private data:string)
    {
    this.message=data;
    }
    public onOkClick(){
      this.dialogRef.close();
      this.onYes.emit()
    }
}
