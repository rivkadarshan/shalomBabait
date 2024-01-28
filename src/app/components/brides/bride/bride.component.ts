import { Component, Inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Bride } from 'src/app/classes/bride';
import { BrideService } from 'src/app/services/bride.service';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';
import { BrideDetailsComponent } from '../bride-details/bride-details/bride-details.component';
import { SearchBrideDialogComponent } from '../search-bride/search-bride-dialog/search-bride-dialog.component';
import { SelectBrideForUpdateComponent } from '../search-bride/select-bride-for-update/select-bride-for-update.component';

export type search_or_new = 'search' | 'new'

@Component({
  selector: 'app-bride',
  templateUrl: './bride.component.html',
  styleUrls: ['./bride.component.css']
})

export class BrideComponent implements OnInit {

  @Input()
  public bride!: Bride;

  public searchOrNew: search_or_new = 'new';

  constructor(private activeted: ActivatedRoute, private dialog: MatDialog, private brideService: BrideService) { }

  ngOnInit(): void {
    this.activeted.params.subscribe(myParams => {
      this.searchOrNew = myParams["searchOrNew"];
    });
    if (this.searchOrNew == 'search')
      this.openSearchDialog();
    if (this.searchOrNew === 'new')
      this.bride = new Bride(0, '', '', '', '', new Date, new Date, 0,"",0,"");
  }

  private openSearchDialog(): void {
    const dialogRef = this.dialog.open(SearchBrideDialogComponent, {
      data: this.searchOrNew
    },
    );
    dialogRef.componentInstance.onSearched.subscribe((bride: Bride) => {
      this.brideService.getByNameOrPhone(bride).subscribe((brides: Bride[]) => {
        debugger
        if (this.searchOrNew === 'new') {
          if (!brides.length)
            this.bride = bride
          if (brides.length === 1) {
            const dialogRef = this.dialog.open(ConfirmDialogComponent, {
              data: 'נמצאה כלה האם לעדכן?'
            })
            dialogRef.componentInstance.onNo.subscribe(() => {
              this.bride = bride
            }
            )
            dialogRef.componentInstance.onYes.subscribe(() => {
              this.bride = brides[0];
            })
          }
          if (brides.length > 1) {

            const dialogRef = this.dialog.open(SelectBrideForUpdateComponent, {
              data: brides
            })
            dialogRef.componentInstance.onSelect.subscribe((brideSelect: Bride) => {
              this.bride = bride
            })
            dialogRef.componentInstance.onNew.subscribe(() => {
              this.bride = bride
            })
          }
        }
        if (this.searchOrNew === 'search') {
          if (!brides.length)
            this.bride = bride
          if (brides.length === 1) {
            const dialogRef = this.dialog.open(ConfirmDialogComponent, {
              data: `${brides[0].bridename} נמצאה הכלה`
            })
            dialogRef.componentInstance.onNo.subscribe(() => {
              this.bride = bride
            }
            )
            dialogRef.componentInstance.onYes.subscribe(() => {
              this.bride = brides[0];
            })
          }
          if (brides.length > 1) {
            const dialogRef = this.dialog.open(SelectBrideForUpdateComponent, {
              data: brides
            })
            dialogRef.componentInstance.onSelect.subscribe(() => {
              this.bride = bride
            })
            dialogRef.componentInstance.onNew.subscribe(() => {
              this.bride = bride
            })
          }
        }
      })
    })
  }

}

