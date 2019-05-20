In this small interview project, you will implement a shopping cart!

The cart's _behavior_ is specified in shopping_cart.test.js.

The cart's _implementation_ is stubbed out in shopping_cart.js.

---
To complete the exercise, please 
* download a zip copy of this repository
* implement the shopping cart functions in shopping_cart.js
* verify that all tests pass
* zip up your solution
  * IMPORTANT: please rename the extension from zip to anything else before submitting (Ki Mobility's mail servers will reject files with the .zip extension)
* submit your solution to dpackard@kimobility.com CC cbudd@kimobility.com

---

To run the tests:

```
npm install
npm test
```
---

example: 
To make this test pass:
```
test('New cart should be empty', () => {
  const cart = ShoppingCart();
  expect(cart.isEmpty()).toBe(true);
});
```

you could implement the isEmpty() method as follows:
```
isEmpty: function(){ 
  return cart_items.length === 0;
},
```

---

A successful implementation should result in the following test results:
![image](https://user-images.githubusercontent.com/1051245/58049724-28c36580-7b13-11e9-9734-1c0a635bf986.png)
