import { TemplateGetter } from './template-getter.interface';

export class CheckBoxTemplate implements TemplateGetter{
    
    static type : string = 'Chk'

    public getHtmlContent(...params: string[]) {
        return `<div *dxTemplate="let cellData of 'chkBox'">
            some checkbox 
        </div>
        <div *dxTemplate="let cellData of 'headerChkbox'">
            some checkbox header
        </div>
        `
    } 

    public defaultFormat() {
        return '';
    }
}

export class DateTemplate implements TemplateGetter{
    
    static type : string = 'Date';

    public getHtmlContent(...params: string[]) {
        return `{{cellData.value | date: '${params[0]}'}}`
    } 

    public defaultFormat() {
        return 'dd-MMM-yyyy';
    }
}

export class NumberTemplate implements TemplateGetter {
    
    static type : string = 'Number'

    public getHtmlContent(...params: string[]) {
        return `<dxo-format type="fixedPoint" [precision]="${params[0]}"></dxo-format>`
    } 

    public defaultFormat() {
        return 2;
     }
}

export class CustomTemplate implements TemplateGetter {
    
    static type : string = 'Custom'

    public getHtmlContent(...params: string[]) {
        return ``
    } 

    public defaultFormat() {
        return '';
     }
}

export class TemplateFactory {

    public static findTemplate(code : string) : TemplateGetter {
        if(code == NumberTemplate.type) return new NumberTemplate();
        if(code == DateTemplate.type) return new DateTemplate();
        if(code == CheckBoxTemplate.type) return new CheckBoxTemplate();
        if(code == CustomTemplate.type) return new CustomTemplate();
        return null;
    }

}