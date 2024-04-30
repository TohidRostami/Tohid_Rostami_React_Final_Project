class CartItems{
    id:number;
    quantity:number;

    constructor(productId:number,productQuantity:number){
        this.id=productId;
        this.quantity=productQuantity;
    }
}

export default CartItems;