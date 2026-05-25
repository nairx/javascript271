const cart = [
  { id: 1, name: "Product 1", price: 23000, quantity: 2 },
  { id: 2, name: "Product 2", price: 21000, quantity: 3 },
  { id: 3, name: "Product 3", price: 27000, quantity: 5 },
];

//Print all the items in the cart along with
//line item total and total order value

cart.map((item) => {
  console.log(item.name, item.price, item.quantity, item.price * item.quantity);
});

const orderValue = cart.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0,
);

console.log("Order Value: ",orderValue)
