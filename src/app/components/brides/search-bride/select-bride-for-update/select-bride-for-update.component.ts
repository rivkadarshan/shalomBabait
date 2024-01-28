import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Bride } from 'src/app/classes/bride';
import { BrideComponent } from '../../bride/bride.component';

@Component({
  selector: 'app-select-bride-for-update',
  templateUrl: './select-bride-for-update.component.html',
  styleUrls: ['./select-bride-for-update.component.css']
})
export class SelectBrideForUpdateComponent implements OnInit {

  @Output() public onCancel :EventEmitter<void> = new EventEmitter<void>();
  @Output() public onNew :EventEmitter<void> = new EventEmitter<void>();
  @Output() public onSelect :EventEmitter<Bride> = new EventEmitter<Bride>();

  public brides:Bride[] =[]

  public brideSelect:Bride= new Bride(0, '', '', '', '', new Date, new Date, 0,"",0,"");;
  
  constructor(  
    private router:Router,
    public dialogRef: MatDialogRef<BrideComponent>,
    @Inject(MAT_DIALOG_DATA) private data:Array<Bride>
    ){
      this.brides=data
   }
 

  ngOnInit(): void {
  }

  public onCancelClick(){
    this.router.navigateByUrl("/");
    this.dialogRef.close();
  }

  public onSelectClick(){
    this.onSelect.emit(this.brideSelect)
    this.router.navigateByUrl("/bride");
    this.dialogRef.close();
  }

  public onNew1(){
    this.onNew.emit()
    this.router.navigateByUrl("/bride");
    this.dialogRef.close();
  }
}
