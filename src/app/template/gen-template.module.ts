import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChkBoxTemplateComponent } from './chk-box-template.component';
import { DateTemplateComponent } from './date-template.component';
import { NumberTemplateComponent } from './number-template.component';



@NgModule({
  declarations: [    
    ChkBoxTemplateComponent,
    DateTemplateComponent,
    NumberTemplateComponent
  ],
  imports: [
    CommonModule
  ],
  schemas : [],
  exports :[
    ChkBoxTemplateComponent,
    DateTemplateComponent,
    NumberTemplateComponent
  ]
})
export class GenTemplateModule { }
