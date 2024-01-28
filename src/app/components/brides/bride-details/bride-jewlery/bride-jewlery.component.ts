import { Component, Inject, Input, OnInit, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Bride } from 'src/app/classes/bride';
import { BrideJewlery } from 'src/app/classes/BrideJewelry';
import { Jewelry } from 'src/app/classes/Jewelry';
import { bridejewleryService } from 'src/app/services/bridejewleryService.services';
import { jewleryService } from 'src/app/services/jewlery.services';
import { NewJewleryComponent } from '../new-jewlery/new-jewlery.component';
import { ConfirmDialogComponent } from 'src/app/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-bride-jewlery',
  templateUrl: './bride-jewlery.component.html',
  styleUrls: ['./bride-jewlery.component.css']
})

export class BrideJewleryComponent implements OnInit {
  public jewelry: BrideJewlery[] = []
  public selectJewelry: Array<Jewelry> = []
  sumbBudject:number=0
  date:Date=new Date;
  @Input() public bride = new Bride(0, "", "", "", "", new Date, new Date, 0,"",0,"");

  constructor(private bridejewleryServ: bridejewleryService, private dialog: MatDialog,@Inject(MAT_DIALOG_DATA) public dialogData: { bride: Bride } ) 
    {
      if (dialogData && dialogData.bride) 
        this.bride = dialogData.bride;
    }     

  ngOnInit(): void {
    this.bridejewleryServ.loadData()
    this.refresh()
  }
// פתיחת דיאלוג
  private openDialog(): void {
    const dialogRef = this.dialog.open(NewJewleryComponent, {
      data: {id: this.bride.brideid, SelectJewelry: this.selectJewelry}
    })
    dialogRef.componentInstance.onCreateNewBrideJewelry.subscribe(()=>{    
       this.ngOnInit()
    })
    dialogRef.afterClosed().subscribe(result =>{
      console.log("closed")
      this.bridejewleryServ.loadData()
      this.refresh()
    })
  }
  
  onAdditionClick() {
    this.openDialog();
  }
  
  refresh(){
    // טעינת נתונים למערך תכשיטים לכלה הנוכחית
    if (this.bride.brideid != 0)
      this.bridejewleryServ.getById(this.bride?.brideid).subscribe(
        (data) => {
          this.jewelry = data
          if(this.jewelry[0].ischoose!=undefined){ }
        },
        e => { alert("error") }
      );
  }
  onDelete(brideJewelryId:number)  {
   const dialogRef = this.dialog.open(ConfirmDialogComponent, {
     data:'?האם אתה בטוח שברצונך למחוק'
   })
   dialogRef.componentInstance.onYes.subscribe(() => {
    this.bridejewleryServ.deleteBrideJewelry(brideJewelryId).subscribe(
      (data)=>{this.ngOnInit();},
        e=>{alert("הפעולה נכשלה");
      }
      ); 
   })
     this.ngOnInit()
   }

  OnUpdateBrideJewrely(bridejewelryid:number)
  {
    alert("updateBrideJewerley")
  }

}
