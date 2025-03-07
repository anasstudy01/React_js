# JavaScript Cheat Sheet

## 1. Variables
- `var`, `let`, `const`
  - `var`: Function-scoped, can be re-declared and updated.
    ```javascript
    var x = 10;
    var x = 20; // Re-declared
    x = 30; // Updated
    ```
  - `let`: Block-scoped, can be updated but not re-declared.
    ```javascript
    let y = 10;
    y = 20; // Updated
    // let y = 30; // Error: Identifier 'y' has already been declared
    ```
  - `const`: Block-scoped, cannot be updated or re-declared.
    ```javascript
    const z = 10;
    // z = 20; // Error: Assignment to constant variable
    // const z = 30; // Error: Identifier 'z' has already been declared
    ```

## 2. Data Types
- Primitive: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`
  - Immutable values.
    ```javascript
    let str = "Hello";
    let num = 42;
    let bool = true;
    let n = null;
    let u = undefined;
    let sym = Symbol("sym");
    ```
- Non-primitive: `object`, `array`, `function`
  - Mutable values.
    ```javascript
    let obj = { name: "John" };
    let arr = [1, 2, 3];
    let func = function() { return "Hello"; };
    ```

## 3. Functions
- Function Declaration
  ```javascript
  function greet() {
    return "Hello";
  }
  ```
- Function Expression
  ```javascript
  const greet = function() {
    return "Hello";
  };
  ```
- Arrow Functions
  ```javascript
  const greet = () => "Hello";
  ```

## 4. Hoisting
- Variable Hoisting
  ```javascript
  console.log(a); // undefined
  var a = 10;
  ```
- Function Hoisting
  ```javascript
  console.log(greet()); // "Hello"
  function greet() {
    return "Hello";
  }
  ```

## 5. Scope
- Global Scope
  ```javascript
  var globalVar = "I am global";
  ```
- Local Scope
  ```javascript
  function localScope() {
    var localVar = "I am local";
  }
  ```
- Block Scope
  ```javascript
  if (true) {
    let blockVar = "I am block scoped";
  }
  ```
- Lexical Scoping
  ```javascript
  function outer() {
    let outerVar = "I am outer";
    function inner() {
      console.log(outerVar); // "I am outer"
    }
    inner();
  }
  ```

## 6. Closures
- Definition and Examples
  ```javascript
  function makeCounter() {
    let count = 0;
    return function() {
      count++;
      return count;
    };
  }
  const counter = makeCounter();
  console.log(counter()); // 1
  console.log(counter()); // 2
  ```

## 7. `this` Keyword
- Global Context
  ```javascript
  console.log(this); // Window object (in browsers)
  ```
- Function Context
  ```javascript
  function showThis() {
    console.log(this);
  }
  showThis(); // Window object (in browsers)
  ```
- Arrow Function Context
  ```javascript
  const showThis = () => {
    console.log(this);
  };
  showThis(); // Inherits from parent scope
  ```
- Object Method Context
  ```javascript
  const obj = {
    name: "John",
    showThis: function() {
      console.log(this);
    }
  };
  obj.showThis(); // obj
  ```

## 8. Event Loop
- Call Stack
  ```javascript
  function first() {
    console.log("First");
  }
  function second() {
    first();
    console.log("Second");
  }
  second(); // "First", "Second"
  ```
- Web APIs
  ```javascript
  setTimeout(() => {
    console.log("Timeout");
  }, 1000);
  ```
- Callback Queue
  ```javascript
  setTimeout(() => {
    console.log("Callback");
  }, 0);
  console.log("Main"); // "Main", "Callback"
  ```
- Event Loop Mechanism
  - Manages the execution of multiple pieces of code over time.

## 9. Promises
- Creating Promises
  ```javascript
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Success");
    }, 1000);
  });
  ```
- `then`, `catch`, `finally`
  ```javascript
  promise
    .then(result => console.log(result)) // "Success"
    .catch(error => console.log(error))
    .finally(() => console.log("Done"));
  ```
- Async/Await
  ```javascript
  async function asyncFunc() {
    try {
      const result = await promise;
      console.log(result); // "Success"
    } catch (error) {
      console.log(error);
    } finally {
      console.log("Done");
    }
  }
  asyncFunc();
  ```

## 10. Asynchronous JavaScript
- Callbacks
  ```javascript
  function fetchData(callback) {
    setTimeout(() => {
      callback("Data");
    }, 1000);
  }
  fetchData(data => console.log(data)); // "Data"
  ```
- Promises
  ```javascript
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data");
    }, 1000);
  });
  promise.then(data => console.log(data)); // "Data"
  ```
- Async/Await
  ```javascript
  async function fetchData() {
    const data = await promise;
    console.log(data); // "Data"
  }
  fetchData();
  ```

## 11. Higher-Order Functions
- Definition and Examples
  ```javascript
  function higherOrder(func) {
    return function() {
      return func();
    };
  }
  const greet = () => "Hello";
  const newFunc = higherOrder(greet);
  console.log(newFunc()); // "Hello"
  ```
- Common Higher-Order Functions: `map`, `filter`, `reduce`
  - `map`: Transforms each element in an array.
    ```javascript
    const arr = [1, 2, 3];
    const newArr = arr.map(x => x * 2);
    console.log(newArr); // [2, 4, 6]
    ```
  - `filter`: Filters elements in an array based on a condition.
    ```javascript
    const arr = [1, 2, 3];
    const newArr = arr.filter(x => x > 1);
    console.log(newArr); // [2, 3]
    ```
  - `reduce`: Reduces an array to a single value.
    ```javascript
    const arr = [1, 2, 3];
    const sum = arr.reduce((acc, x) => acc + x, 0);
    console.log(sum); // 6
    ```

## 12. Throttling and Debouncing
- Throttling: Definition and Examples
  ```javascript
  function throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
  ```
- Debouncing: Definition and Examples
  ```javascript
  function debounce(func, delay) {
    let debounceTimer;
    return function() {
      const args = arguments;
      const context = this;
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func.apply(context, args), delay);
    };
  }
  ```

## 13. Prototypes and Inheritance
- Prototypal Inheritance
  ```javascript
  function Person(name) {
    this.name = name;
  }
  Person.prototype.greet = function() {
    return `Hello, ${this.name}`;
  };
  const john = new Person("John");
  console.log(john.greet()); // "Hello, John"
  ```
- `Object.create`
  ```javascript
  const person = {
    greet: function() {
      return `Hello, ${this.name}`;
    }
  };
  const john = Object.create(person);
  john.name = "John";
  console.log(john.greet()); // "Hello, John"
  ```
- Classes and `extends`
  ```javascript
  class Person {
    constructor(name) {
      this.name = name;
    }
    greet() {
      return `Hello, ${this.name}`;
    }
  }
  class Student extends Person {
    constructor(name, studentId) {
      super(name);
      this.studentId = studentId;
    }
  }
  const john = new Student("John", 123);
  console.log(john.greet()); // "Hello, John"
  ```

## 14. Modules
- ES6 Modules: `import`, `export`
  ```javascript
  // module.js
  export const greet = () => "Hello";

  // main.js
  import { greet } from './module.js';
  console.log(greet()); // "Hello"
  ```
- CommonJS Modules: `require`, `module.exports`
  ```javascript
  // module.js
  const greet = () => "Hello";
  module.exports = greet;

  // main.js
  const greet = require('./module');
  console.log(greet()); // "Hello"
  ```

## 15. Error Handling
- `try`, `catch`, `finally`
  ```javascript
  try {
    throw new Error("Something went wrong");
  } catch (error) {
    console.log(error.message); // "Something went wrong"
  } finally {
    console.log("Cleanup");
  }
  ```
- Custom Errors
  ```javascript
  class CustomError extends Error {
    constructor(message) {
      super(message);
      this.name = "CustomError";
    }
  }
  try {
    throw new CustomError("Custom error occurred");
  } catch (error) {
    console.log(error.name); // "CustomError"
    console.log(error.message); // "Custom error occurred"
  }
  ```

## 16. Regular Expressions
- Syntax and Examples
  ```javascript
  const regex = /hello/i;
  const str = "Hello World";
  console.log(regex.test(str)); // true
  ```

## 17. DOM Manipulation
- Selecting Elements
  ```javascript
  const element = document.querySelector("#myElement");
  ```
- Modifying Elements
  ```javascript
  element.innerHTML = "New Content";
  element.style.color = "red";
  ```
- Event Listeners
  ```javascript
  element.addEventListener("click", () => {
    console.log("Element clicked");
  });
  ```

## 18. Fetch API
- Making HTTP Requests
  ```javascript
  fetch("https://api.example.com/data")
    .then(response => response.json())
    .then(data => console.log(data));
  ```
- Handling Responses
  ```javascript
  fetch("https://api.example.com/data")
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.log(error));
  ```

## 19. ES6+ Features
- Template Literals
  ```javascript
  const name = "John";
  const greeting = `Hello, ${name}`;
  console.log(greeting); // "Hello, John"
  ```
- Destructuring
  ```javascript
  const obj = { a: 1, b: 2 };
  const { a, b } = obj;
  console.log(a, b); // 1, 2
  ```
- Spread Operator
  ```javascript
  const arr1 = [1, 2, 3];
  const arr2 = [...arr1, 4, 5];
  console.log(arr2); // [1, 2, 3, 4, 5]
  ```
- Rest Parameters
  ```javascript
  function sum(...args) {
    return args.reduce((acc, val) => acc + val, 0);
  }
  console.log(sum(1, 2, 3)); // 6
  ```
- Default Parameters
  ```javascript
  function greet(name = "Guest") {
    return `Hello, ${name}`;
  }
  console.log(greet()); // "Hello, Guest"
  ```
- Optional Chaining
  ```javascript
  const obj = { a: { b: { c: 1 } } };
  console.log(obj?.a?.b?.c); // 1
  console.log(obj?.x?.y?.z); // undefined
  ```

## 20. Miscellaneous
- `setTimeout`, `setInterval`
  ```javascript
  setTimeout(() => {
    console.log("Executed after 1 second");
  }, 1000);

  const intervalId = setInterval(() => {
    console.log("Executed every 1 second");
  }, 1000);
  clearInterval(intervalId); // Stops the interval
  ```
- `JSON.stringify`, `JSON.parse`
  ```javascript
  const obj = { name: "John", age: 30 };
  const jsonString = JSON.stringify(obj);
  console.log(jsonString); // '{"name":"John","age":30}'

  const parsedObj = JSON.parse(jsonString);
  console.log(parsedObj); // { name: "John", age: 30 }
  ```
- `localStorage`, `sessionStorage`
  ```javascript
  localStorage.setItem("name", "John");
  console.log(localStorage.getItem("name")); // "John"
  localStorage.removeItem("name");

  sessionStorage.setItem("name", "John");
  console.log(sessionStorage.getItem("name")); // "John"
  sessionStorage.removeItem("name");
  ```

