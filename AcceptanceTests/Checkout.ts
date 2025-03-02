import ShoppingCart from "./ShoppingCart";
import ShoppingCartImpl from "./ShoppingCart";

interface Checkout{
    doCheckout(cart : ShoppingCart ) : void;
}

class CheckoutImpl implements Checkout{
    paymentMethods = ['PalPay','CardMaster','Cash'];

    doCheckout(cart: ShoppingCartImpl): void {

        console.log("Ecommerce Checkout - Cart: \n");
        cart.print();

        console.log("Select one payment method:");
        for(let index = 0; index <= this.paymentMethods.length - 1; index++){
            const method = this.paymentMethods[index];
            console.log(`${index} - ${method}`);
        }
    }
}


export default CheckoutImpl;