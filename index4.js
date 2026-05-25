// const products = ["Laptop","Desktop","Keyboard"]
// console.log(products[0])
// console.log(products.length)

// const numbers = [45,23,67,25,90]
// numbers.forEach(number => console.log(number))

// const numbers = [45,23,67,25,90]
// numbers.map(number => console.log(number))

// const numbers = [45,23,67,25,90]
// const newArray = numbers.map(number => number + 3)
// console.log(newArray)

// const numbers = [45,23,67,25,90]
// const newArray = numbers.filter(number => number > 30)
// console.log(newArray)

// const numbers = [45,23,67,25,90]
// const result = numbers.find(number => number > 30)
// console.log(result)

const numbers = [45, 23, 67, 25, 90];
const result = numbers.reduce((sum, number) => sum + number, 0);
console.log(result);
