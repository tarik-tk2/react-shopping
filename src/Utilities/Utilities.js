const addToDb = (id) => {

    const shoppingCart = getShoppingCart();
    let  quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id]=newQuantity
    } else {
        shoppingCart[id] = 1;
    }
    localStorage.setItem("shoppingCart",JSON.stringify(shoppingCart))
}

const getShoppingCart = () => {
     let shoppingCart = {};
  const getCart=  localStorage.getItem('shoppingCart');
    if (getCart) { 
        const parseCart = JSON.parse(getCart);
        shoppingCart = parseCart;
    } 
    return shoppingCart;
}
export { addToDb ,getShoppingCart}