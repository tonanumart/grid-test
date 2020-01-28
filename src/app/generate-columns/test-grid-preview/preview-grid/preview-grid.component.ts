import { Component, OnInit, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver, NgModule, Compiler, Injector, NgModuleRef, OnChanges, SimpleChanges } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import ArrayStore from 'devextreme/data/array_store';

import { QryDataService } from 'src/app/services/qry-data.service';
import { CommonModule } from '@angular/common';
import { DxDataGridModule } from 'devextreme-angular';
import { of } from 'rxjs';

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
    
    let register : any  = this.sourceCode;
    register.notify = (e)=>{
      this.addComponent();
    }

  }

  public addComponent() {
    //const componentFactory = this.componentFactoryResolver.resolveComponentFactory(CustomHtmlComponent);
    //const cmpRef = this.injectComp.createComponent(componentFactory);
    //cmpRef.instance.dataSource = this.dataSource;

    const template = this.sourceCode.genHtml;
    const tmpCmp = Component({ template: template })(class {});
    const tmpModule = NgModule({
      declarations: [tmpCmp],
      imports: [
        CommonModule,
        DxDataGridModule,
      ]
    })(class { });
    this.compiler.compileModuleAndAllComponentsAsync(tmpModule)
      .then((factories) => {
        const f = factories.componentFactories.filter(x=>{
          return x.selector === 'ng-component';
        });
        const cmpRef = f[0].create(this.injector, [], null, this.moduleAngular);
        cmpRef.instance.dataSource = this.dataSource;
        this.injectComp.remove(0);
        this.injectComp.insert(cmpRef.hostView);
      })
  }

}


// class PrivateCustomComponent {
//   constructor() {
//     dxDataGrid.defaultOptions({  
//       options: {  
//         editing : {  
//           allowUpdating: false  
//         }  
//       }  
//     })
//   }
// }