import { Component, OnInit, Input } from '@angular/core';
import DataSource from 'devextreme/data/data_source';

@Component({
    selector: 'custom-html',
    template: `
   <dx-data-grid #grid [dataSource]="dataSource">
    <dxi-column dataField="value" caption="value"   alignment="right" >
        <dxo-format type="fixedPoint" [precision]="2"></dxo-format>
    </dxi-column>
    <dxi-column dataField="other" caption="other"   alignment="left" ></dxi-column>
</dx-data-grid>
  `,
})
export class CustomHtmlComponent implements OnInit {

    @Input() dataSource: DataSource;

    constructor() { }

    ngOnInit() {
    }

}
