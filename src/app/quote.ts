export class Quote {
    public showDetails:boolean;
    constructor( 
        public number:number,
        public quoter:string,
        public author:string,
        public date:Date){
            this.showDetails = false;
        }
   
}
