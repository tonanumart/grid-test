import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { GeneratorElementsComponent } from './generator-elements/generator-elements.component';
import { DataSelectorComponent } from './data-selector/data-selector.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TreeSchemaComponent } from './data-selector/tree-schema/tree-schema.component';
import { GenerateColumnsComponent } from './generate-columns/generate-columns.component';
import { ColumnTodoComponent } from './generate-columns/column-todo/column-todo.component';
import { ModalTemplateFormComponent } from './generate-columns/modal-template-form/modal-template-form.component';
import { NoSanitizePipe } from './pipes/no-sanitize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GeneratorElementsComponent,
    DataSelectorComponent,
    TreeSchemaComponent,
    GenerateColumnsComponent,
    ColumnTodoComponent,
    ModalTemplateFormComponent,
    NoSanitizePipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
