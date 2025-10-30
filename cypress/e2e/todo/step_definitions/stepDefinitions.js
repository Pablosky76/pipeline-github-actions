const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const TodoPage = require("../pages/TodoPage");

const todoPage = new TodoPage();

Given("Abro la aplicación TodoMVC", () => {
  cy.visit("https://todomvc.com/examples/react/dist/");
});

When("Agrego una tarea {string}", (taskName) => {
  todoPage.addTodo(taskName);
});

When("Agrego la tarea {string}", (taskName) => {
  todoPage.addTodo(taskName);
});

When("Marco la tarea {string} como completada", (taskName) => {
  todoPage.markCompleted(taskName);
});

When("Desmarco la tarea {string}", (taskName) => {
  todoPage.unmarkCompleted(taskName);
});

When("Edito la tarea {string} por {string}", (oldName, newName) => {
  todoPage.editTodo(oldName, newName);
});

When("Elimino la tarea {string}", (taskName) => {
  todoPage.deleteTodo(taskName);
});

Then("La tarea {string} debe existir en la lista", (taskName) => {
  todoPage.validateTodoExists(taskName);
});

Then("La tarea {string} no debe existir en la lista", (taskName) => {
  todoPage.validateTodoNotExists(taskName);
});

Then("La tarea {string} debe estar completada", (taskName) => {
  todoPage.validateCompleted(taskName);
});

Then("La tarea {string} no debe estar completada", (taskName) => {
  todoPage.validateNotCompleted(taskName);
});

Then("Filtro por tareas completadas debe mostrar {string}", (taskName) => {
  todoPage.filterCompleted();
  todoPage.validateTodoExists(taskName);
});

Then("Filtro por tareas no completadas debe mostrar {string}", (taskName) => {
  todoPage.filterActive();
  todoPage.validateTodoExists(taskName);
});

Then('Filtro "All" debe mostrar {string} y {string}', (task1, task2) => {
  todoPage.filterAll();
  todoPage.validateTodoExists(task1);
  todoPage.validateTodoExists(task2);
});
