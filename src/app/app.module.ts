import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { GeneratorElementsComponent } from './generator-elements/generator-elements.component';
import { DataSelectorComponent } from './data-selector/data-selector.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TreeSchemaComponent } from './data-selector/tree-schema/tree-schema.component';
import { GenerateColumnsComponent } from './generate-columns/generate-columns.component';
import { ColumnTodoComponent } from './generate-columns/column-todo/column-todo.component';
import { ModalTemplateFormComponent } from './generate-columns/modal-template-form/modal-template-form.component';
import { ChkBoxTemplateComponent } from './template/chk-box-template.component';
import { DateTemplateComponent } from './template/date-template.component';
import { NumberTemplateComponent } from './template/number-template.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneratorElementsComponent,
    DataSelectorComponent,
    TreeSchemaComponent,
    GenerateColumnsComponent,
    ColumnTodoComponent,
    ModalTemplateFormComponent,
    ChkBoxTemplateComponent,
    DateTemplateComponent,
    NumberTemplateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
