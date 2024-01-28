import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { Bride } from 'src/app/classes/bride';
import { BrideService } from 'src/app/services/bride.service';
import { search_or_new } from '../../bride/bride.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-bride-more-details',
  templateUrl: './bride-more-details.component.html',
  styleUrls: ['./bride-more-details.component.css']
})
export class BrideMoreDetailsComponent implements OnInit {
  @Input() public bride!: Bride;
  @Input() public searchOrNew!: search_or_new ;
  @Output() public onCreateNewBride: EventEmitter<void> = new EventEmitter<void>();

  updateOrReadonly: boolean = true;

  constructor(private brideServ: BrideService,private dialogRef: MatDialogRef<ConfirmDialogComponent>, @Inject(MAT_DIALOG_DATA) public dialogData: { bride: Bride, searchOrNew: search_or_new }) {
    if (dialogData && dialogData.bride) {
      this.bride = dialogData.bride;
    }
    this.searchOrNew = dialogData.searchOrNew;
  }
  ngOnInit() {
    this.updateOrReadonly = this.searchOrNew === 'search';
  }

  onupdate() {
    this.updateOrReadonly = false;
  }

  onSave() {
    alert("in")
    if (this.searchOrNew !== 'new') {
      this.brideServ.updateBride(this.bride).subscribe(
        data => {
          this.dialogRef.close();
          // עדכון הרשימה בסרביס
          this.brideServ.loadData();
        },
        err => {
          alert(err.message);
        }
      );
    } else {
      this.dialogRef.close();
      this.onCreateNewBride.emit();
      this.brideServ.postAddBride(this.bride).subscribe(
        s => {
          debugger
          console.log(this.bride)
          this.brideServ.loadData();
        },
        e => {
          alert(e.message);
        }
      );
    }
  }
}
