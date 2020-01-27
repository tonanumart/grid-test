import { Component, OnInit, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver, NgModule, Compiler, Injector, NgModuleRef } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import ArrayStore from 'devextreme/data/array_store';
// import { DxDataGridModule } from 'devextreme-angular';

import { QryDataService } from 'src/app/services/qry-data.service';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
import { CustomHtmlComponent } from './custom-html/custom-html.component';


//import { CustomHtmlComponent } from './custom-html/custom-html.component';

@Component({
  selector: 'preview-grid',
  templateUrl: './preview-grid.component.html',
  styles: []
})
export class PreviewGridComponent implements OnInit {

  @Input() sourceCode: { genHtml: string };

  @ViewChild("anchor", { static: true, read: ViewContainerRef })
  injectComp: ViewContainerRef;

  public dataSource: DataSource;

  constructor(public service: QryDataService,
    private componentFactoryResolver : ComponentFactoryResolver,
    private compiler: Compiler,
    private injector: Injector,
    private moduleAngular: NgModuleRef<any>) {

  }

  ngOnInit() {
    let sampleData$ = this.service.sampleData();
    sampleData$.subscribe((response) => {
      this.dataSource = new DataSource({
        store: new ArrayStore({
          data: response
        })
      })
    })
  }

  public addComponent() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(CustomHtmlComponent);
    const cmpRef = this.injectComp.createComponent(componentFactory);
    cmpRef.instance.dataSource = this.dataSource;

    //   const template = this.sourceCode.genHtml;
    //   const tmpCmp = Component({ template: template })(class { });
    //   const tmpModule = NgModule({
    //     declarations: [tmpCmp],
    //     imports: [
    //       CommonModule,
    //       FormsModule,
    //       DxDataGridModule,
    //       DataSource,
    //       ArrayStore
    //     ]
    //   })(class { });
    //   this.compiler.compileModuleAndAllComponentsAsync(tmpModule)
    //     .then((factories) => {
    //       const f = factories.componentFactories[0];
    //       const cmpRef = f.create(this.injector, [], null, this.moduleAngular);
    //       cmpRef.instance.dataSource = this.dataSource;
    //       this.injectComp.insert(cmpRef.hostView);
    //     })
  }

}
