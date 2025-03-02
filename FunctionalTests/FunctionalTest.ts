import FancyTestingLibrary from "./FancyTestingLibrary/FancyTestingLibrary";
import FancyTestingLibraryImpl from "./FancyTestingLibrary/FancyTestingLibrary";
import PrinterImpl from "./Printer";
import Printer from "./Printer";

interface  FunctionalTest{
    runFunctionalTest() : void;
}

class FunctionalTestImpl implements FunctionalTest{
    fancyTestingLibrary : FancyTestingLibrary = new FancyTestingLibraryImpl();

    runFunctionalTest(): void {
        const printer : Printer = new PrinterImpl();

        this.fancyTestingLibrary.assertEquals(printer.printForLocale("en-US"), "[en-US] \n");
        console.log("[SUCCESS] we guarantee the business logic [%s] in format works well");
    }

}

new FunctionalTestImpl().runFunctionalTest();