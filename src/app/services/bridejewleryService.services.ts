import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { jewleryService } from 'src1/app/services/jewlery.services';
import { BrideJewlery } from '../classes/BrideJewelry';

@Injectable({
  providedIn: 'root'
})    

export class bridejewleryService {
  url="https://localhost:44317/api/BridejewelryControler/"
  
  constructor(private http:HttpClient,private jewleryServ:jewleryService) { }

  public brideJewelry:Array<BrideJewlery>=[]
  
  getAll():Observable<Array<BrideJewlery>>
  {  
    return this.http.get<Array<BrideJewlery>>(`${this.url}getAll`)
  }

  loadData()
  {
    this.getAll().subscribe(
      (myData)=>
       {
         //הפרמטר מכיל את הערך המוחזר במקרה של הצלחה
         console.log("loaded b j")
         this.brideJewelry = myData;
       },
       myErr=>
       {
         //אובייקט שיש בו מידע על השגיאה שהתרחשה
         alert(myErr.message);
       }
     );
  }

  getById(id: number):Observable<Array<BrideJewlery>>
  {
    return this.http.get<Array<BrideJewlery>>(`${this.url}getById/${id}`);
  }

  addBrideJewelry(newBrideJewelry:BrideJewlery):Observable<number>
  {
    return this.http.post<number>(`${this.url}AddBrideJewelry`,newBrideJewelry);
  }

   deleteBrideJewelry(id:number):Observable<Array<number>>
  {
    return this.http.delete<Array<number>>(this.url + "deleteBrideJewelry/" + id);
  }

  refreshList(list:Array<BrideJewlery>)
  {
    this.brideJewelry = list;
  }
}