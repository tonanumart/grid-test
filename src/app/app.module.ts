import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GeneratorElementsComponent } from './generator-elements/generator-elements.component';
import { DataSelectorComponent } from './data-selector/data-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneratorElementsComponent,
    DataSelectorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
