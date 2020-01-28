import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'test-grid-preview',
  templateUrl: './test-grid-preview.component.html',
  styleUrls: []
})
export class TestGridPreviewComponent implements OnInit {

  @Input() sourceCode: { genHtml: string };

  public page : 'preview'|'code' = 'preview';

  constructor() { }

  ngOnInit() {

  }

  public tabSelect(page :string){
    return {
      'tab-pane' : true,
      'active' : this.page == page
    }
  }

  public navSelect(page :string){
    return {
      'nav-link' : true,
      'active' : this.page == page
    }
  }

}
