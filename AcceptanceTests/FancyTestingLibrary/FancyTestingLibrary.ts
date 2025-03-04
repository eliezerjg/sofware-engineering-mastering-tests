interface FancyTestingLibrary{
    assertEquals(a : any, b : any) : boolean;
}

class FancyTestingLibraryImpl implements  FancyTestingLibrary{
    assertEquals(a: any, b: any, testName? : string): boolean {
        if (a !== b){
            throw Error("IS NOT EQUALS");
        }

        console.info(`✅ [TEST] [${testName || 'PLEASE SET A NAME'}] PASSED`);
        return true;
    }

}

export default FancyTestingLibraryImpl;