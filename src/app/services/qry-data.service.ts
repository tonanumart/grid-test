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
    return new DataColumn(key,true,
        this.camelToSentence(key),
        null, 
        null, 
        'N/A',
        this.autoAlign(key.toLowerCase())
    );
  }

  private autoAlign(key : string){
    if(key.endsWith('date') || key.endsWith('datetime'))
      return 'center';
    else if(key.indexOf('value') >= 0 || key.indexOf('amount') >= 0)
      return 'right';
    return 'left';
  }

  
  private camelToSentence(stringValue : string){
    return stringValue.replace(/([A-Z]+)/g, " $1").replace(/([A-Z][a-z])/g, " $1")
  }

  public getDataSource(){
    return this.column$;
  }

}
