function greet(name, callBack) {
  console.log("Hello " + name);
  callBack();
}

greet("John", () => console.log("Good Morning"));
