import PrinterImpl from "./Printer";
import Printer from "./Printer";
import FancyTestingLibrary from "./FancyTestingLibrary/FancyTestingLibrary";
import FancyTestingLibraryImpl from "./FancyTestingLibrary/FancyTestingLibrary";

interface NotFunctionalTest {
    runNotFunctionalTest() : void;
}

class NotFunctionalTestImpl implements NotFunctionalTest{

    fancyTestingLibrary : FancyTestingLibrary = new FancyTestingLibraryImpl();

    runNotFunctionalTest(): void {
        const printer : Printer = new PrinterImpl();



        for(let index = 0 ; index <= 5; index++){
            const start = Date.now();
            let printerFormat = printer.printForLocale("en-US");
            const end = Date.now();

            const FORMAT_PRESENT_ON_RETURN = printerFormat !== null;
            this.fancyTestingLibrary.assertEquals(true, FORMAT_PRESENT_ON_RETURN);
            console.log(`[${new Date().toISOString()}] [PERFORMANCE BENCHMARK TEST] ${index} - ${printerFormat} - COSTS ${end - start} MS TO RUN.`);
        }

    }

}

new NotFunctionalTestImpl().runNotFunctionalTest();