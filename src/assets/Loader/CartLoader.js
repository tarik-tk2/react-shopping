import { getShoppingCart } from "../../Utilities/Utilities";

const cartLoader= async() => {
    const loadData = await fetch("https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json")
    const products = await loadData.json();


     let shoppingCart = [];
     const storeCart = getShoppingCart();
     for (let id in storeCart) {
       const findCart = products.find((pd) => pd.id === id);
       if (findCart) {
         const newQuantity = storeCart[id];
         findCart.quantity = newQuantity;
         shoppingCart.push(findCart);
       }
     }
    return shoppingCart;
}
export default cartLoader;