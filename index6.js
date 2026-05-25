//rest operator
function add(...marks) {
  return marks.reduce((sum, mark) => sum + mark, 0);
}

const result = add(4, 5, 7,9);
console.log(result);
