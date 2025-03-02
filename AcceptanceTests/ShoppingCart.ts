import ShoppingItem from "./ShoppingItem";
import ShoppingItemImpl from "./ShoppingItem";
import Formatter from "./Formatter";
import FormatterImpl from "./Formatter";



interface ShoppingCart{
    getItems() : ShoppingItem[];
    setItems(items : ShoppingItem[]) : void;
    addItem(item : ShoppingItem) : void;
    removeItem(item : ShoppingItem) : void;
    print() : string;
}



class ShoppingCartImpl implements ShoppingCart{
    private items: ShoppingItem[] = [];

    addItem(item: ShoppingItem): void {
        this.items.push(item);
    }

    getItems(): ShoppingItem[] {
        return this.items;
    }

    setItems(items: ShoppingItemImpl[]): void {
        this.items = items;
    }

    removeItem(item: ShoppingItem): void {

       for(let index = 0; index <= this.items.length; index++){
           let candidate : ShoppingItem = this.items[index];
           if(candidate === item){
               this.items[index] = null;
               this.setItems(this.items.filter(n  => n !== null));
               break;
           }
       }

        return;
    }

    print(): string {
        let items : ShoppingItem[] = this.getItems();

        let formatted_ids = {};
        let quantityMap = {};
        let prettyAppend = '';
        let total = 0;

        for(let item of items) {
            const id: number = item.getId();
            if (!formatted_ids[id]) {
                quantityMap[id] = 0;

                for (let _item of items) {
                    if (_item.getId() == item.getId()) {
                        quantityMap[id] = quantityMap[id] + 1;
                        total += _item.getValue();
                    }
                }

                prettyAppend += `[${id}] - ${item.getName()} x(${quantityMap[item.getId()]}) - $ ${item.getValue()} \n`;
                formatted_ids[id] = id;
            }

        }
        const tax_percentage = 0.30;

        const formatter : Formatter = new FormatterImpl();

        prettyAppend += `TOTAL: $ ${formatter.format(total)}\n`;
        prettyAppend += `TAXES: $ ${formatter.format(total * tax_percentage)}\n`;
        prettyAppend += `TOTAL AFTER TAXES: $ ${formatter.format(total - (total * tax_percentage))}\n`;

        console.log(prettyAppend);
        return prettyAppend;
    }




}

export default ShoppingCartImpl;