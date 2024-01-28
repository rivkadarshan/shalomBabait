import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-addition-jewlery',
  templateUrl: './addition-jewlery.component.html',
  styleUrls: ['./addition-jewlery.component.css']
})
export class AdditionJewleryComponent {
 
 constructor(private router:Router,private dialogRef: MatDialogRef<AdditionJewleryComponent>){}

 public onCancelClick(){
  this.router.navigateByUrl("/");
  this.dialogRef.close();
}
  onNew1()
  {
    
  }
}
