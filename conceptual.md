### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
  callbacks, promises, async/await, and event listeners

- What is a Promise?
  an object that represents the eventual completion or failure of an asynchronous operation. Promises allow you to chain asynchronous operations instead of nesting callbacks

- What are the differences between an async function and a regular function?
   a function that returns a Promise implicitly and enables the use of await inside of it. A regular function returns right away and does not wait for any async operations.

- What is the difference between Node.js and Express.js?
  Node.js is a runtime for executing JavaScript code outside of a browser, while Express.js is a web application framework built on top of Node.js for building web apps and APIs

- What is the error-first callback pattern?
  error-first callback pattern involves passing an error object as the first argument to a callback function, before any successful response data. This allows for easy error handling

- What is middleware?
  Middleware functions are functions that have access to the request and response objects. They can execute any code, make changes, end the request/response cycle, and call the next middleware in the stack.



- What does the `next` function do?
  The next() function passes control to the next middleware function in the stack.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

  Nested callbacks instead of using promises for better readability
  No error handling if a request fails
  Variable/function names could be more descriptive
```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
