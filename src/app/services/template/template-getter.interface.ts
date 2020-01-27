export interface TemplateGetter {
    getHtmlContent(... params: string[]);
    defaultFormat() : any;
}