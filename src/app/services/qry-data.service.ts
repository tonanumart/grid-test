import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { DataColumn } from '../models/data-column.model';

@Injectable({
  providedIn: 'root'
})
export class QryDataService {

  private column$ = new BehaviorSubject<DataColumn[]>([]);

  constructor(private http : HttpClient) { 

  }

  public qryData(url : string){
    return this.http.get(url);
  }

  public columnChange(itemColumn : string[]){
    let columnSchema = itemColumn.slice().map(x=>this.genColumn(x));
    this.column$.next(columnSchema);
  }

  private genColumn(key : string){
    return { dataField : key 
      , visible : true 
      , caption : ''
      , width : null
      , cellTemplate : null
      , cellTemplateCode : 'N/A'
     };
  }

  public getDataSource(){
    return this.column$;
  }

}
