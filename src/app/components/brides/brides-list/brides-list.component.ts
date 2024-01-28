import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Bride } from 'src/app/classes/bride';
import { BrideService } from 'src/app/services/bride.service';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';
import { bridejewleryService } from 'src/app/services/bridejewleryService.services';
import { BrideMoreDetailsComponent } from '../bride-details/bride-more-details/bride-more-details.component';
import { BrideJewleryComponent } from '../bride-details/bride-jewlery/bride-jewlery.component';

@Component({
  selector: 'app-brides-list',
  templateUrl: './brides-list.component.html',
  styleUrls: ['./brides-list.component.css']
})
export class BridesListComponent implements OnInit{
  public brides:Bride[] =[]
  public originalBrides: Bride[] = [];
  public brideSelect:Bride= new Bride(0,"","","","",new Date,new Date,0,"",0,"");
  hoveredRow: number | null = null;
  public searchName: string = '';
  public searchPhone: string = '';

  clickedRows = new Set<Bride>();
  router: any;

 constructor(rauter:Router, private brideServ:BrideService,private brideJewleryServe:bridejewleryService, private dialog: MatDialog)
 {
 }
  ngOnInit(): void {
   this.brideServ.getAll().subscribe(
    s=>{
      this.originalBrides = s;
      this.brides = [...s];
    },
    e=>{}
   );
  }

  public addNewBride() {
    const dialog = this.dialog.open(BrideMoreDetailsComponent, {
      data: { bride: new Bride(0, "", "", "", "", new Date, new Date, 0, "", 0, ""), searchOrNew: "new" }
    });
  
    dialog.componentInstance.onCreateNewBride.subscribe(() => {
      this.brideServ.loadData();
      this.ngOnInit();
    });
  }
   public onDelete(id:number)
   {
    const dialog = this.dialog.open(ConfirmDialogComponent, {
      data:'האם אתה בטוח שברצונך למחוק?'
    })
    dialog.componentInstance.onYes.subscribe(() => {
      this.brideServ.deleteBride(id).subscribe((x:Number)=>{
      this.ngOnInit()
        if(x==-1)
         alert("לא נמצא רשומה")      
      })
    })
      this.ngOnInit()
    }
    public onMoreDetails(bride: Bride) {
      const dialogRef = this.dialog.open(BrideMoreDetailsComponent, {
        data: { bride: bride,searchOrNew:'search' }
      });
    }
    public onJewlery(bride: Bride) {
      const dialogRef = this.dialog.open(BrideJewleryComponent, {
        data: { bride: bride }
      });
    }
    setHoveredRow(index: number): void {
      this.hoveredRow = index;
    }
  
    clearHoveredRow(): void {
      this.hoveredRow = null;
    }

    public filterBridesByName(): void {
      if (this.searchName.trim() === '') {
        this.onClearSearchName();
        return;
      }  
      this.brides = this.originalBrides.filter(bride =>
        bride.bridename.includes(this.searchName) || bride.groomname.includes(this.searchName)
      );
    }

    public onSearchName(): void {
      this.filterBridesByName();
    }
    
    public onClearSearchName(): void {
      this.searchName = '';
      this.brides = [...this.originalBrides];
    }

    public filterBridesByPhone(): void {
      if (this.searchPhone.trim() === '') {
        this.onClearSearchByPhone();
        return;
      }  
      this.brides = this.originalBrides.filter(bride =>
        bride.bridephone.includes(this.searchPhone) || bride.groomphone.includes(this.searchPhone)
      );
    }

    public onSearchPhone(): void {
      this.filterBridesByPhone();
    }
    
    public onClearSearchByPhone(): void {
      this.searchPhone = '';
      this.brides = [...this.originalBrides];
    }
  }

