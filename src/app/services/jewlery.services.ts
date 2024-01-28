import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jewelry } from '../classes/Jewelry';

@Injectable({
  providedIn: 'root'
})    

export class jewleryService { 
  url="https://localhost:7111/api/JewelryControler/"
  constructor(private http:HttpClient) { }

  private Jewelry:Array<Jewelry>=[]

  loadData()
  {
    console.log("loading data")
    this.getList().subscribe(
      (myData)=>
       {
         //הפרמטר מכיל את הערך המוחזר במקרה של הצלחה
         this.Jewelry = myData;
       },
       myErr=>
       {
         //אובייקט שיש בו מידע על השגיאה שהתרחשה
         alert(myErr.message);
       }
     );
  }

  getList():Observable<Array<Jewelry>>
  {
    return this.http.get<Array<Jewelry>>(this.url +"GetAll");
  }

  getById(id:number):Observable<Array<Jewelry>>
  {
    return this.http.get<Array<Jewelry>>(`${this.url}GetById?id=${id}`)
  }

  getJewelryList(){
    return this.Jewelry
  }

  //מקבל רשימה ומעדכן את הרשימה הנוכחית של הסרביס
  refreshList(list:Array<Jewelry>)
  {
    this.Jewelry = list;
  }
}