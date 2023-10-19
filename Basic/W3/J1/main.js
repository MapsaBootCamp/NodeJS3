/////////////////////////////////////////// (throw statement)
/*
    An exception is a signal that indicates that some sort of exceptional condition or error
    has occurred.To throw an exception is to signal such an error or exceptional condi‐
    tion. To catch an exception is to handle it to take whatever actions are necessary or
    appropriate to recover from the exception. In JavaScript, exceptions are thrown
    whenever a runtime error occurs and whenever the program explicitly throws one
    using the throw statement. Exceptions are caught with the try/catch/finally statement.

    The throw statement has the following syntax: 
    
    throw expression;
    
    expression may evaluate to a value of any type.
    
    The Error class and its subclasses are used when the JavaScript interpreter itself throws an
    error, and you can use them as well. An Error object has a name property that specifies
    the type of error and a message property

*/
// const e = new Error("YE ETEFAGHI ROKH DADE");
// e.name = "TypeError";
// throw e;

function factorial(x) {
  // If the input argument is invalid, throw an exception!
  if (x < 0) throw new Error("x must not be negative");
  // Otherwise, compute a value and return normally
  let f;
  for (f = 1; x > 1; f *= x, x-- /* empty */);
  return f;
}
// console.log(factorial(4)); // => 24
// console.log(factorial(-1)); // => throw new Error

///////////////////////////////////// (try/catch/finally) ==> exeption handling!

try {
  // Normally, this code runs from the top of the block to the bottom
  // without problems. But it can sometimes throw an exception,
  // either directly, with a throw statement, or indirectly, by calling
  // a method that throws an exception.
} catch (e) {
  // The statements in this block are executed if, and only if, the try
  // block throws an exception. These statements can use the local variable
  // e to refer to the Error object or other value that was thrown.
  // This block may handle the exception somehow, may ignore the
  // exception by doing nothing, or may rethrow the exception with throw.
} finally {
  // This block contains statements that are always executed, regardless of
  // what happens in the try block. They are executed whether the try
  // block terminates:
  // 1) normally, after reaching the bottom of the block
  // 2) because of a break, continue, or return statement
  // 3) with an exception that is handled by a catch clause above
  // 4) with an uncaught exception that is still propagating
}

// try {
//   for (let index = 0; index < 10; index++) {
//     if (index === 5) throw new Error("harchi");
//     // if (index === 5) continue;
//     console.log("in for in try");
//   }
// } catch (e) {
//   console.log(e);
//   console.log("in catch");
// } finally {
//   console.log("in finally");
// }

/// Example: (just run on browser!)
// try {
//   // Ask the user to enter a number
//   let n = Number(prompt("Please enter a positive integer", ""));
//   // Compute the factorial of the number, assuming the input is valid
//   let f = factorial(n);
//   // Display the result
//   alert(n + "! = " + f);
// } catch (ex) {
//   // If the user's input was not valid, we end up here
//   alert(ex); // Tell the user what the error is
// }

///////////////////////////// with statement

// const myObject = {
//   name: "Ashkan",
//   age: 12,
// };

// with (myObject) {
//   age = 21;
//   console.log(age);
// }

// console.log(myObject);
