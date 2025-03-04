
import FancyTestingLibrary from "./FancyTestingLibrary/FancyTestingLibrary";
import ModuleAImpl from "./ModuleA/ModuleA";
import ModuleBImpl from "./ModuleB/ModuleB";
import FancyTestingLibraryImpl from "./FancyTestingLibrary/FancyTestingLibrary";

interface TestableService{
    runIntegrationTest() : boolean;
}

class Service implements  TestableService{
    runIntegrationTest(): boolean {
        console.warn("NOTE: SHOULD FAIL MODULE B");
        const TEST : FancyTestingLibrary =  new FancyTestingLibraryImpl();

        let modules = [ModuleAImpl, ModuleBImpl];
        let errors : string[] = [];
        for(let module of modules){
            let moduleInstance : any = new module();
            let name : string = moduleInstance.constructor.name;
            let isIntegrated = moduleInstance["imAlive"]();
            try{
                TEST.assertEquals(isIntegrated, true);
            }catch (error){
                errors.push(name + " IS NOT INTEGRATED PROPERLY");
            }
        }

        if(errors.length > 0){
            console.error("INTEGRATION FATAL ERROR(S):");
            for(let error of errors){
                console.error("[FAIL]: " + error);
            }
            return false;
        }

        return true;
    }
}

let serviceInstance : TestableService = new Service();
serviceInstance.runIntegrationTest();