import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })   

export class GeneralService {
    private bride=new Bride(0,'','','','',new Date,new Date,0);
    getBride(){
        return this.bride
    }

}