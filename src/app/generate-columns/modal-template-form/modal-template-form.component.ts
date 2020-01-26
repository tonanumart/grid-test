import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { TemplateGetter } from 'src/app/template/template-getter.interface';

@Component({
  selector: 'modal-template-form',
  templateUrl: './modal-template-form.component.html',
  styles: []
})
export class ModalTemplateFormComponent implements OnInit {

  @Input() content : any;
  @Input() modal : any;
  @Input() item : any;
  @Output() onSave : EventEmitter<any> = new EventEmitter();


  @ViewChild('chk',{static : false}) chk : TemplateGetter;
  @ViewChild('date',{static : false}) date : TemplateGetter;
  @ViewChild('number',{static : false}) number : TemplateGetter;


  constructor() { }

  ngOnInit() {
   
  }

  public saveClick(){
    this.onSave.emit(this.item);
  }

  public templateChange(value){
    this.item.cellTemplateCode = value;
    this.updateTemplate(true);
  }

  public updateTemplate(isReset : boolean = false){
    let value = this.item.cellTemplateCode;
    if(value == this.chk.type){
      this.item.cellTemplate = this.chk.getHtmlContent(this.item.caption
        ,this.item.dataField);
    }else if(value == this.date.type){
      if(isReset) this.item.format = 'dd-MMM-yyyy';
      this.item.cellTemplate = this.date.getHtmlContent(this.item.caption
        ,this.item.dataField,this.item.format);
    }else if(value == this.number.type){
      if(isReset) this.item.format = 2;
      this.item.cellTemplate = this.number.getHtmlContent(this.item.caption
        ,this.item.dataField
        ,this.item.format);
    }else{
      this.item.cellTemplate = ''
    }
  }

}
