const products = [
  { id: 1, name: "Product 1", price: 23000 },
  { id: 2, name: "Product 2", price: 21000 },
  { id: 3, name: "Product 3", price: 27000 },
];

//create a new array with price increment by 5000
// const newArray = products.map(product=> ({...product,price:product.price + 5000}))
// console.log(newArray)

//create a new array with product price > 22000
// const newProducts = products.filter((product) => product.price > 22000);
// console.log(newProducts);

//display the price of product id 3
const product = products.find(product=>product.id === 3)
console.log(product.price)