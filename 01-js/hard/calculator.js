/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
    this.result = 0;
  }

  add(number) {
    this.result = this.result + number;
  }

  subtract(number) {
    this.result = this.result - number;
  }

  multiply(number) {
    this.result = this.result * number;
  }

  divide(number) {
    if (number == 0) {
      throw new Error('Divide by zero error !!!');
    }
    this.result = this.result / number;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calc(opr1, opr2, opr) {
    if (opr === "+") {
      return opr1 + opr2;
    }
    else if (opr === "-") {
      return opr1 - opr2;
    }
    else if (opr === "*") {
      return opr1 * opr2;
    }
    else if (opr === "/") {
      if (opr2 == 0) {
        throw new Error('Divide by zero error !!!');
      }
      return opr1 / opr2;
    }
  }

  remove_braces(expression) {
    var op = "";
    var stack = [];
    var opr = [];
    const operator = new Set(["+", "-", "*", "/"])

    for (let i = 0; i < expression.length; i++) {
      if (expression[i] === ")") {
        stack.push(op);
        op = "";
        var a = parseFloat(stack.pop());
        while (stack[stack.length - 1] != "(") {
          var b = parseFloat(stack.pop());
          var operand = opr.pop();
          a = this.calc(b, a, operand);
        }
        stack.pop();
        op = a;
      }

      else if (expression[i] === "(") {
        stack.push(expression[i]);
      }

      else if (!operator.has(expression[i])) {
        op = op + expression[i];
      }

      else {
        stack.push(op);
        opr.push(expression[i]);
        op = "";
      }
    }
    stack.push(op);

    var result = "";
    a = stack.pop();
    result = result + a.toString();
    while (opr.length > 0) {
      a = stack.pop();
      b = opr.pop()
      result = a.toString() + b + result;
    }
    return result;
  }

  calculate(expression) {
    const operator = new Set(["+", "-", "*", "/"])
    const precedense = { "-": 1, "+": 2, "*": 3, "/": 4 };
    const required = new Set(["+", "-", "*", "/", ".", "(", ")", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", " "])
    var stack = [];
    var opr = [];
    var expr = "";
    var oc = 0, cc = 0;

    for (let i = 0; i < expression.length; i++) {
      if (required.has(expression[i])) {
        if (expression[i] === "(") {
          oc = oc + 1
        }
        else if (expression[i] === ")" && cc < oc) {
          cc = cc + 1
        }
        else if (expression[i] === ")" && cc >= oc) {
          throw new Error('Invalid parenthesis !!!');
        }
        expr = expr + expression[i];
      }
      else if (expression[i].length > 0) {
        // console.log("Invalid character ...");
        throw new Error('Invalid character !!!');
      }
    }

    if (oc != cc) {
      throw new Error('Invalid parenthesis !!!');
    }

    // console.log(expr);
    expr = this.remove_braces(expr);
    // console.log(expr);

    var op = "";
    for (let i = 0; i < expr.length; i++) {
      if (!operator.has(expr[i])) {
        op = op + expr[i];
      }

      else {
        stack.push(op);
        if (precedense[expr[i]] < precedense[opr[opr.length - 1]]) {
          var a = parseFloat(stack.pop());
          var b = parseFloat(stack.pop());
          var operand = opr.pop();
          stack.push(this.calc(b, a, operand));
        }
        opr.push(expr[i]);
        op = "";
      }
    }

    a = parseFloat(op);
    while (stack.length > 0) {
      b = parseFloat(stack.pop());
      operand = opr.pop();
      a = this.calc(b, a, operand);
    }
    this.result = a;
    return a;
  }
}

// const a = new Calculator();
// b = a.calculate("10 +   2 *    (   6 - (4 + 1) / 2) + 7+5");
// console.log(b);
// b = a.calculate("10 +   ab + 2");
// console.log(b);

module.exports = Calculator;
