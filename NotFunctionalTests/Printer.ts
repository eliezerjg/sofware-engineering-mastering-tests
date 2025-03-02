interface Printer {
    printForLocale(locale: string): string;
}

class PrinterImpl implements Printer {
    printForLocale(locale: string): string {
        const delay = Math.floor(Math.random() * 2000) + 1000;
        const start = Date.now();

        // the worst way to implement async (blocking the main thread), to avoid importing fancy ES things
        while (Date.now() - start < delay) {}

        return `[${locale}]`;
    }
}

export default PrinterImpl;