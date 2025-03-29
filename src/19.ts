class MyClass {
  constructor() {
    this.name = "Alice";
    this.age = 25;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Example usage:
const instance = new MyClass();
instance.greet(); // Output: Hello, my name is Alice and I am 25 years old.
