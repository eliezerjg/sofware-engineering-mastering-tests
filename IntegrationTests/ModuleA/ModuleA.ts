interface ModuleA{
    imAlive() : boolean;
}

class ModuleAImpl implements ModuleA{
    imAlive(): boolean {
        return true;
    }
}

export default ModuleAImpl;