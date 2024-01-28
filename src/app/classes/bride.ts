
export class Bride {
    constructor(
        public brideid: number=0,
        public bridename: string,
        public bridephone: string,
        public groomname: string="",
        public groomphone: string="",
        public brideinsertdate:Date=new Date(),
        public Weddingdate:Date=new Date(),
        public debt: number,
        public descriptionBride:string="",
        public paid:number,
        public Address:string
        ) { }
}
