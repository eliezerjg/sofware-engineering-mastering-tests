interface ModuleB {
    imAlive() : boolean;
}

class ModuleBImpl implements ModuleB{

    imAlive(): boolean {
        return false;
    }

}

export default ModuleBImpl;