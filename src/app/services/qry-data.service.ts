import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { DataColumn } from '../models/data-column.model';
import { TemplateService } from './template.service';

@Injectable({
  providedIn: 'root'
})
export class QryDataService {
  


  private column$ = new BehaviorSubject<DataColumn[]>([]);
  private data$ = new BehaviorSubject<any[]>([]);
  private currentColumnData: DataColumn[];

  constructor(private http: HttpClient,
    private tServ: TemplateService) {

  }

  public qryData(url: string) {
    return this.http.get(url);
  }

  public sampleData(){
    return this.data$;
  }

  public columnChange(itemColumn: string[],sampleData : any[]) {
    let columnSchema = itemColumn.slice().map(x => this.genColumn(x));
    this.currentColumnData = columnSchema;
    this.column$.next(columnSchema);
    this.data$.next(sampleData);
  }

  private genColumn(key: string) {
    let column = new DataColumn(key, true,
      this.camelToSentence(key),
      null,//width
      null,//cellTemplate
      this.autoTemplateFind(key.toLocaleLowerCase()),
      this.autoAlign(key.toLowerCase()), null);
    let cellTemplate = this.tServ.genTemplateByCode(column, true);
    column.cellTemplate = cellTemplate;
    return column;
  }

  private autoAlign(key: string) {
    if (key.endsWith('date') || key.endsWith('datetime'))
      return 'center';
    else if (key.indexOf('value') >= 0 || key.indexOf('amount') >= 0)
      return 'right';
    return 'left';
  }

  private autoTemplateFind(key: string): string {
    if (key.endsWith('date') || key.endsWith('datetime'))
      return 'Date';
    else if (key.indexOf('value') >= 0 || key.indexOf('amount') >= 0)
      return 'Number';
    return "N/A";
  }

  private camelToSentence(stringValue: string) {
    let first = stringValue[0];
    let replace = stringValue.replace(/([A-Z]+)/g, " $1");
    replace = replace.replace(/([A-Z][a-z])/g, " $1");
    return first.toUpperCase() + replace.substring(1);
  }

  public getDataSource() {
    return this.column$;
  }

  addNewColumn() {
    this.currentColumnData.push(new DataColumn(
      '',true,
      '',null,null,'N/A','center',null
    ));
  }

  public removeIndex(row: number) {
    this.currentColumnData.splice(row, 1);
    this.column$.next(this.currentColumnData.slice());
  }

  public downRow(row: number) {
    let temp = this.currentColumnData[row];
    this.currentColumnData[row] = this.currentColumnData[row + 1];
    this.currentColumnData[row + 1] = temp;
    this.column$.next(this.currentColumnData.slice());
  }

  public upRow(row: number) {
    let temp = this.currentColumnData[row];
    this.currentColumnData[row] = this.currentColumnData[row - 1];
    this.currentColumnData[row - 1] = temp;
    this.column$.next(this.currentColumnData.slice());
  }

}
