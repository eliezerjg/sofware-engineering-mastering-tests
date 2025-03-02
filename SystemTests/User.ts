

interface User{
    getName() : string;
    setName(name : string) : void;
}

class UserImpl implements User{
    private name : string;
    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }

}

export default UserImpl;