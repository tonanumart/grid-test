import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'preview-grid',
  templateUrl: './preview-grid.component.html',
  styles: []
})
export class PreviewGridComponent implements OnInit {

  @Input() template : string;

  constructor() { }

  ngOnInit() {
    
  }

}
