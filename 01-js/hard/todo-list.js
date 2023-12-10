/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.app = [];
  }

  add(todo) {
    this.app.push(todo);
  }

  remove(indexOfTodo) {
    if ((indexOfTodo >= 0) && (indexOfTodo < this.app.length)) {
      this.app.splice(indexOfTodo, 1);
    }
  }

  update(index, updatedTodo) {
    if ((index >= 0) && (index < this.app.length)) {
      this.app[index] = updatedTodo;
    }
  }

  getAll() {
    return this.app;
  }

  get(indexOfTodo) {
    if ((indexOfTodo >= 0) && (indexOfTodo < this.app.length)) {
      return this.app[indexOfTodo];
    }
    return null;
  }

  clear() {
    this.app = [];
  }
}

module.exports = Todo;
