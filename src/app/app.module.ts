import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';

import { AppComponent } from './app.component';
import { GeneratorElementsComponent } from './generator-elements/generator-elements.component';
import { DataSelectorComponent } from './data-selector/data-selector.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TreeSchemaComponent } from './data-selector/tree-schema/tree-schema.component';
import { GenerateColumnsComponent } from './generate-columns/generate-columns.component';
import { ColumnTodoComponent } from './generate-columns/column-todo/column-todo.component';
import { ModalTemplateFormComponent } from './generate-columns/modal-template-form/modal-template-form.component';
import { XmlPipe } from './pipes/xml.pipe';
import { TestGridPreviewComponent } from './generate-columns/test-grid-preview/test-grid-preview.component';
import { PreviewGridComponent } from './generate-columns/test-grid-preview/preview-grid/preview-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneratorElementsComponent,
    DataSelectorComponent,
    TreeSchemaComponent,
    GenerateColumnsComponent,
    ColumnTodoComponent,
    ModalTemplateFormComponent,
    XmlPipe,
    TestGridPreviewComponent,
    PreviewGridComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule,
    ClipboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
