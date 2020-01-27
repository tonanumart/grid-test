export class DataColumn {

  constructor(public dataField: string,
    public visible: boolean,
    public caption : string,
    public width : number,
    public cellTemplate : string,
    public cellTemplateCode : string,
    public alignment : string,
    public format : any){

  }
  
}
