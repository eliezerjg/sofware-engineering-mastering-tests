import PrinterImpl from "./Printer";
import Printer from "./Printer";

interface NotFunctionalTest {
    runNotFunctionalTest() : void;
}

class NotFunctionalTestImpl implements NotFunctionalTest{

    runNotFunctionalTest(): void {
        const printer : Printer = new PrinterImpl();



        for(let index = 0 ; index <= 5; index++){
            const start = Date.now();
            let printerFormat = printer.printForLocale("en-US");
            const end = Date.now();

            console.log(`[${new Date().toISOString()}] [PERFORMANCE BENCHMARK TEST] ${index} - COSTS ${end - start} MS TO RUN.`);
        }

    }

}

new NotFunctionalTestImpl().runNotFunctionalTest();