import UserImpl from "./User";
import User from "./User";
import ShoppingCart from "./ShoppingCart";
import ShoppingItem from "./ShoppingItem";
import ShoppingItemImpl from "./ShoppingItem";
import Checkout from "./Checkout";
import CheckoutImpl from "./Checkout";

interface TestableUseCase{
    runTestableUseCase() : void;
}

interface EcommerceUseCase {

}

class EcommerceUseCaseImpl implements EcommerceUseCase, TestableUseCase{
    runTestableUseCase(): void {
        // lets pretend this is a runtime test with input
        let user : User = new UserImpl();
        user.setEmail("usuario@email.com");
        user.setName("nome");

        let cart : ShoppingCart = user.getShoppingCart();

        let item1 : ShoppingItem = new ShoppingItemImpl();
        item1.setId(1);
        item1.setName("white shoe");
        item1.setType("shoes");
        item1.setValue(515.99);


        cart.addItem(item1);
        cart.addItem(item1);
        cart.addItem(item1);
        cart.addItem(item1);

        let item2 : ShoppingItem = new ShoppingItemImpl();
        item2.setId(2);
        item2.setName("red shoe");
        item2.setType("shoes");
        item2.setValue(512.99);


        cart.addItem(item2);
        cart.addItem(item2);
        cart.addItem(item2);
        cart.addItem(item2);
        cart.addItem(item2);
        cart.addItem(item2);
        cart.addItem(item2);
        cart.addItem(item2);

        let item3 : ShoppingItem = new ShoppingItemImpl();
        item3.setId(3);
        item3.setName("brown shoe");
        item3.setType("shoes");
        item3.setValue(912.99);


        cart.addItem(item3);
        cart.addItem(item3);


        cart.removeItem(item1);

        const checkout : Checkout = new CheckoutImpl();
        checkout.doCheckout(cart);
        // the user tested it and accepted the flux
        console.log("[SUCCESS] THE USER TESTED IN RUNTIME AND ACCEPTED IT");
    }

}

let useCase : TestableUseCase = new EcommerceUseCaseImpl();
useCase.runTestableUseCase();