import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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

  constructor() { }

  ngOnInit() {

  }

  public saveClick(){
    this.onSave.emit(this.item);
  }

  public templateChange(value){
    this.item.cellTemplateCode = value;
  }

}
