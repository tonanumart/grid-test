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
    if(value == this.chk.type){
      this.item.cellTemplate = this.chk.getHtmlContent();
    }else if(value == this.date.type){
      this.item.cellTemplate = this.date.getHtmlContent();
    }else if(value == this.number.type){
      this.item.cellTemplate = this.number.getHtmlContent();
    }else{
      this.item.cellTemplate = ''
    }
  }

}
