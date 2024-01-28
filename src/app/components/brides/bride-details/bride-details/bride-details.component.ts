import { Component, Inject, Input, OnChanges, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Bride } from 'src/app/classes/bride';
import { BrideService } from 'src/app/services/bride.service';
import { search_or_new } from '../../bride/bride.component';

export type brideOrNull =Bride

@Component({
  selector: 'app-bride-details',
  templateUrl: './bride-details.component.html',
  styleUrls: ['./bride-details.component.css']
})

export class BrideDetailsComponent implements OnInit {

  @Input()
  public bride!: brideOrNull;
  @Input()
  public searchOrNew: search_or_new ='new'

  constructor(private activeted:ActivatedRoute) {}

  ngOnInit(): void {
  }

  ngOnChanges(){
    
  }
}
