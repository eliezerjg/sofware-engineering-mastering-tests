interface Printer{
    printForLocale(locale : string) : string;
}

class PrinterImpl implements  Printer{
    printForLocale(locale: string) {
        let append = '';
        append = `[${locale}] \n`;
        return append;
    }
}

export default PrinterImpl;