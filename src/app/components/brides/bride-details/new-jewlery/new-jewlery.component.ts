import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrideJewlery } from 'src/app/classes/BrideJewelry';
import { Jewelry } from 'src/app/classes/Jewelry';
import { bridejewleryService } from 'src/app/services/bridejewleryService.services';
import { eNamesOfJewlery } from '../../../../enums/eNamesOfJewlery';

export interface DialogData {
  id: number,
  SelectJewelry: Array<Jewelry>
}

@Component({
  selector: 'app-new-jewlery',
  templateUrl: './new-jewlery.component.html',
  styleUrls: ['./new-jewlery.component.css']
})

export class NewJewleryComponent {
  public newJewelry: BrideJewlery = new BrideJewlery(0, 0, 0, "", 0, 0,false, "", "");
  public jewelryNames: Array<string> = [];
  public selected = "None"

  @Output() public onCreateNewBrideJewelry: EventEmitter<void> = new EventEmitter<void>();

  constructor(private brideJewelryServ: bridejewleryService,
    private dialogRef: MatDialogRef<NewJewleryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.newJewelry.brideid = data.id
    //מביא את הערכים מהאינום
    for (const key in eNamesOfJewlery) {
      if (eNamesOfJewlery.hasOwnProperty(key)) {
        const jewelryNameKey = key as keyof typeof eNamesOfJewlery;
        this.jewelryNames.push(eNamesOfJewlery[jewelryNameKey]);
      }
   }}

  public onCancel() {
    this.dialogRef.close();
  }

  public onCreate() {
    if (this.newJewelry.budget === 0) {
      alert('חובה להכניס תקציב')
      this.dialogRef.close();
    }
    if (this.newJewelry.brideid == 0) {
      alert("כלה עדין לא קיימת יש לישמור את פירטי הכלה")
      this.dialogRef.close();
    } else {
      this.brideJewelryServ.addBrideJewelry(this.newJewelry).subscribe(
        data => {
          this.onCreateNewBrideJewelry.emit()
          //עדכון הרשימה בסרביס
          this.brideJewelryServ.loadData();
        },
        err => {
          alert(err.message);
        }
      );
      this.dialogRef.close();
    }
  }
}

