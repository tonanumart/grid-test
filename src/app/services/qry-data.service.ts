import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QryDataService {

  constructor(private http : HttpClient) { 

  }

   public qryData(url : string){
     return this.http.get(url);
   }

}
