interface Formatter{
    format(value: number, locale?: string): string;
    format(value: number): string;
}
class FormatterImpl implements Formatter{
    defaultLocale = "en-US";

    format(value: number, locale?: string): string {
        if(!locale){
            locale = this.defaultLocale;
        }
        return new Intl.NumberFormat(locale).format(value);
    }


}

export  default FormatterImpl;