import { Jewelry } from "./Jewelry";
import { Bride } from "./bride";

export class BrideJewlery
{
   constructor(
    public bridejewelryid:number,
    public brideid:number,
    public jewelryid:number,
    public jewelryname:string,
    public budget:number,
    public sumtopay:number,
    public ischoose:boolean=false,
    public color:string,
    public descriptionBridejewelry:string,
   ) {}
}

