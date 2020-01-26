import { Component, OnInit } from '@angular/core';
import { QryDataService } from '../services/qry-data.service';

@Component({
  selector: 'generator-elements',
  templateUrl: './generator-elements.component.html',
  styleUrls: []
})
export class GeneratorElementsComponent implements OnInit {

  constructor(private service : QryDataService) { }

  public endPoint : string;
  public endPointComplete : boolean;

  public dataEndPoint : any;


  ngOnInit() {
    this.endPoint = 'assets/mock.json';
  }

  public changeUrl(value){ 
    this.endPoint = value;
  }

  public getData(){
    this.endPointComplete = false;
    this.service.qryData(this.endPoint)
    .subscribe((response)=>{
      this.dataEndPoint = response;
      this.endPointComplete = true;
    },(error)=>{
      console.error(error);
      alert('press log F12 to see error');
    })
  }

}
