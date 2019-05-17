const ShoppingCart = require('./shopping_cart');

const productA = {name: "a", price: 42.0};
const productB = {name: "b", price: 57.0};
const productC = {name: "c", price: 63.0};

test('New cart should be empty', () => {
  const cart = ShoppingCart();
  expect(cart.isEmpty()).toBe(true);
});

test('New cart total should be 0', () => {
  const cart = ShoppingCart();
  expect(cart.total()).toBe(0);
});

test('New cart should not contain productA', () => {
  const cart = ShoppingCart();
  expect(cart.contains(productA)).toBe(false);
});

test('After adding one productA to the cart, cart should not be empty', () => {
  const cart = ShoppingCart();
  cart.addItem(productA, 1);
  expect(cart.isEmpty()).toBe(false);
});

test('After adding one productA to the cart, cart should contain one productA', () => {
  const cart = ShoppingCart();
  cart.addItem(productA, 1);
  expect(cart.quantity(productA)).toBe(1);
});

test('After adding one productA to the cart, cart should NOT contain any productB', () => {
  const cart = ShoppingCart();
  cart.addItem(productA, 1);
  expect(cart.contains(productB)).toBe(false);
});

test('After adding one productA to the cart, cart should contain zero productB', () => {
  const cart = ShoppingCart();
  cart.addItem(productA, 1);
  expect(cart.quantity(productB)).toBe(0);
});

test('After adding one productA to the cart, cart total should equal price of productA', () => {
  const cart = ShoppingCart();
  cart.addItem(productA, 1);
  expect(cart.total()).toBe(productA.price);
});

test('After adding one productA and then one productB to the cart, cart total should equal price of productA + price of productB', () => {
  const cart = ShoppingCart();
  cart.addItem(productA, 1);
  cart.addItem(productB, 1);
  expect(cart.total()).toBe(productA.price + productB.price);
});

test('After trying to add -1 productA, cart total should contain no productA', () => {
  const cart = ShoppingCart();
  cart.addItem(productA, -1);
  expect(cart.contains(productA)).toBe(false);
});

test('After trying to add -1 productA, cart total should be empty', () => {
  const cart = ShoppingCart();
  cart.addItem(productA, -1);
  expect(cart.isEmpty()).toBe(true);
});

test('After adding two productA and removing one productA, the cart should contain one productA', () => {
  const cart = ShoppingCart();
  cart.addItem(productA, 2);
  cart.removeItem(productA, 1);
  expect(cart.isEmpty()).toBe(true);
});

test('After adding two productA, removing one productA, adding one productB, and adding one productC, the cart total should equal productA.price + productB.price + productC.price', () => {
  const cart = ShoppingCart();
  cart.addItem(productA, 2);
  cart.removeItem(productA, 1);
  cart.addItem(productB, 1);
  cart.addItem(productC, 1);
  expect(cart.total()).toBe(productA.price + productB.price + productC.price);
});
