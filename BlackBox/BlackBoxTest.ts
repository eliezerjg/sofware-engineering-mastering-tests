import FancyTestingLibrary from "./FancyTestingLibrary/FancyTestingLibrary";
import FancyTestingLibraryImpl from "./FancyTestingLibrary/FancyTestingLibrary";
import PrinterImpl from "./FakeBrowserAction";
import Printer from "./FakeBrowserAction";
import FakeBrowserAction from "./FakeBrowserAction";
import FakeBrowserActionImpl from "./FakeBrowserAction";

interface  BlackBoxTest{
    runBlackBoxTest() : void;
}

class BlackBoxTestImpl implements BlackBoxTest{
    fancyTestingLibrary : FancyTestingLibrary = new FancyTestingLibraryImpl();

    runBlackBoxTest(): void {
        // user only knows the button for click (interface)
        const action : FakeBrowserAction = new FakeBrowserActionImpl();
        const actionResult = action.pressButton("button");
        console.warn("USER CLICKED ON DOM BUTTON");
        this.fancyTestingLibrary.assertEquals(actionResult, "I have been clicked");
        console.log(`[SUCCESS] USER RECEIVED - ${actionResult}`);
    }

}

new BlackBoxTestImpl().runBlackBoxTest();