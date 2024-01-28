import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Bride } from 'src/app/classes/bride';
import { BrideJewlery } from 'src/app/classes/BrideJewelry';
import { BrideComponent, search_or_new } from '../../bride/bride.component';

@Component({
  selector: 'app-search-bride-dialog',
  templateUrl: './search-bride-dialog.component.html',
  styleUrls: ['./search-bride-dialog.component.css']
})
export class SearchBrideDialogComponent {

  public searchOrNew:search_or_new;
  public bride: Bride = new Bride(0,"","","","",new Date,new Date,0,"",0,"");
  @Output() public onSearched :EventEmitter<Bride> = new EventEmitter<Bride>();

  constructor(
     private router:Router,
     public dialogRef: MatDialogRef<BrideComponent>,
     @Inject(MAT_DIALOG_DATA) private data:search_or_new){
        this.searchOrNew=data
     }
  
  public onCancelClick(){
    this.router.navigateByUrl("/");
    this.dialogRef.close();
  }

  public onNewOrSearchClick(){
    this.onSearched.emit(this.bride)
    this.dialogRef.close();  }
}
