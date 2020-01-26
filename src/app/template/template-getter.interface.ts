export interface TemplateGetter {
    getHtmlContent(... params: string[]);
    type : string;
}