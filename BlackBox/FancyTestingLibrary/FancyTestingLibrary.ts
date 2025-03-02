interface FancyTestingLibrary{
    assertEquals(a : any, b : any) : boolean;
}

class FancyTestingLibraryImpl implements  FancyTestingLibrary{
    assertEquals(a: any, b: any): boolean {
        if (a !== b){
            throw Error("IS NOT EQUALS");
        }

        return true;
    }

}

export default FancyTestingLibraryImpl;