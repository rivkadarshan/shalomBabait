import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bride } from 'src/app/classes/bride';
import { BrideService } from 'src/app/services/bride.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  brides:Array<Bride>=[]

  constructor(private router:Router, private brideServ:BrideService) { }

  ngOnInit(): void {
  }

  onSearchOrNew(param:string)
  {
    this.router.navigateByUrl("/bride/"+param);
  }

  onBridesList()
  {
    this.router.navigateByUrl("/bridesList");
  }

}
