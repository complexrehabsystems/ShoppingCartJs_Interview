function ShoppingCart() {
  // A shopping cart maintains a collection of products.
  // Each product consists of a name, and a price, e.g.
  //     productA = {name: 'a', price: 42.0 };

  // use this list to maintain a list of items in the cart.
  let cart_items = [];

  return {

    /* If cart is empty, return true.
       Otherwise false */
    isEmpty: function(){ 
      // implement me
    },

    /* Add the specified quantity of product to the cart */
    addItem: function(product, quantity){
      // implement me
    },

    /* Remove the specified quantity of product from the cart */
    removeItem(product, quantity) {
      // implement me
    },

    /* If cart contains any of the specified product, return true. 
       Otherwise false;
    */
    contains(product) {
      // implement me
    },

    /* Return the number of product contained in the cart */
    quantity(product) {
      // implement me
    },

    /* Return the total price of all items contained in the cart */
    total() {
      // implement me
    }
  };
}

module.exports = ShoppingCart;
