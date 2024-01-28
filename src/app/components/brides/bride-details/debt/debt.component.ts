import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Bride } from 'src/app/classes/bride';


@Component({
  selector: 'app-debt',
  templateUrl: './debt.component.html',
  styleUrls: ['./debt.component.css']
})
export class DebtComponent implements OnInit,OnChanges {
  isZchoot:boolean=true
  @Input() public bride:Bride=new Bride(0,'','','','',new Date,new Date,0,"",0,"");

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if(this.bride.debt<0)
     this.isZchoot=false
    else
     this.isZchoot=true
  }

  ngOnInit(): void {
      if(this.bride.debt<0)
         this.isZchoot=false
  }

}
