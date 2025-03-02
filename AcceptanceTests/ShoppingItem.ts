interface ShoppingItem{
    setId(id :  number) : void;
    getId() : number;
    setName(name :  string) : void;
    getName() : string;
    getType() : string;
    setType(type :  'shoes' | 'bag' | 'other') : void;
    getValue() : number;
    setValue(value :  number) : void;
}

class ShoppingItemImpl implements ShoppingItem{
    private id  : number;
    private name : string;
    private type : 'shoes' | 'bag' | 'other';
    private value : number;


    getName(): string {
        return this.name;
    }

    getType(): string {
        return this.type;
    }

    setName(name: string): void {
        this.name = name;
    }

    setType(type: 'shoes' | 'bag' | 'other'): void {
        this.type = type;
    }

    getValue(): number {
        return this.value;
    }

    setValue(value: number): void {
        this.value = value;
    }

    getId(): number {
        return this.id;
    }

    setId(id: number): void {
        this.id = id;
    }

}

export  default ShoppingItemImpl;