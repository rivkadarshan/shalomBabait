import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bride } from '../classes/bride';

@Injectable({
  providedIn: 'root'
})    

export class BrideService {
  public brides:Array<Bride>=[]

  url="https://localhost:7111/api/BrideControler/"
  constructor(private http:HttpClient) { }


  getByNameOrPhone(b:Bride):Observable<Array<Bride>>
  {   
   return this.http.get<Array<Bride>>(`${this.url}GetByNameOrPhone?name1=${b.bridename}&name2=${b.groomname}&phone=${b.bridephone}`)
  }
   postAddBride(newbride:Bride):Observable<Bride>
   {
    debugger
    return this.http.post<Bride>(`${this.url}AddBride`,newbride)
   }

   putUpdateBride(brideToUpdate:Bride)
   {
    return this.http.put<Bride>(`${this.url}updateBride`,brideToUpdate)
   }
  getAll():Observable<Array<Bride>>
  {
    return this.http.get<Array<Bride>>(`${this.url}GetAll`)
  }

  deleteBride(idBride:number):Observable<number>
  {
    return this.http.delete<number>(this.url + "deleteBride/" + idBride)
  }

  updateBride(editBride:Bride):Observable<Array<Bride>>
  
  {
    return this.http.put<Array<Bride>>(this.url+"PutupdateBride/",editBride)
  }

  loadData()
  {
    this.getAll().subscribe(
      (myData)=>
       {
         //הפרמטר מכיל את הערך המוחזר במקרה של הצלחה
         this.brides = myData;
       },
       myErr=>
       {
         //אובייקט שיש בו מידע על השגיאה שהתרחשה
         alert(myErr.message);
       }
     );
  }

 }  

