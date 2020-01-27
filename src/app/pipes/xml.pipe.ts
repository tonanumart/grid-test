import { Pipe, PipeTransform } from '@angular/core';
import * as vkbeautify from 'vkbeautify';

@Pipe({
  name: 'xml'
})
export class XmlPipe implements PipeTransform {

  constructor() {
  }

  transform(value: string): string {
    return vkbeautify.xml(value);
}

}
