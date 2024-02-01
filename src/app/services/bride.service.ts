import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Bride } from '../classes/bride';

@Injectable({
  providedIn: 'root'
})    

export class BrideService {
  public brides:Array<Bride>=[]

  url="https://localhost:7111/api/BrideControler/"
  constructor(private http:HttpClient) { }

  addBride(newbride: Bride): Observable<number> {
    return this.http.post<number>(`${this.url}AddBride`, newbride).pipe(
        map((response: number) => {
            return response;
        })
    );
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
    return this.http.put<Array<Bride>>(this.url+"UpdateBride/",editBride)
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
  getByNameOrPhone(editBride:Bride):Observable<Array<Bride>>
  
  {
   return this.http.put<Array<Bride>>(this.url+"UpdateBride/",editBride)
 
  }

 }  



