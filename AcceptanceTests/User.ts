import ShoppingCart from "./ShoppingCart";
import ShoppingCartImpl from "./ShoppingCart";

interface User{
    getEmail() : string;
    setEmail(email : string): void;
    getName() : string;
    setName(name : string) : void;
    getShoppingCart() : ShoppingCart;
}

class UserImpl implements User{
    private shoppingCart : ShoppingCart;
    private name : string;
    private email : string;

    getEmail(): string {
        return this.email;
    }

    setEmail(name: string): void{
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string) {
        this.name = name;
    }

    getShoppingCart(): ShoppingCartImpl {
        if(!this.shoppingCart) {
            this.shoppingCart = new ShoppingCartImpl();
        }

        return this.shoppingCart;
    }

}

export  default UserImpl;