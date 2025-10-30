class TodoPage {
  elements() {
    return {
      inputNewTodo: () => cy.get('input.new-todo'),
      todoItemLabel: (text) => cy.contains('label', text),
      todoItems: () => cy.get('.todo-list li'),
      deleteButton: (text) => this.elements().todoItemLabel(text).parent().find('.destroy'),
      toggleButton: (text) => this.elements().todoItemLabel(text).parent().find('.toggle'),
      editInput: (text) => this.elements().todoItemLabel(text).parent().find('.edit'),
      filterActive: () => cy.contains('a', 'Active'),
      filterCompleted: () => cy.contains('a', 'Completed'),
      filterAll: () => cy.contains('a', 'All'),
    };
  }

  addTodo(taskName) {
    this.elements().inputNewTodo().type(`${taskName}{enter}`);
  }

  validateTodoExists(taskName) {
    this.elements().todoItemLabel(taskName).should('exist');
  }

  validateTodoNotExists(taskName) {
    this.elements().todoItemLabel(taskName).should('not.exist');
  }

  deleteTodo(taskName) {
    this.elements()
      .todoItemLabel(taskName)
      .parent()
      .find('.destroy')
      .invoke('show')
      .click({ force: true });
  }

  markCompleted(taskName) {
    this.elements().toggleButton(taskName).check();
  }

  unmarkCompleted(taskName) {
    this.elements().toggleButton(taskName).uncheck();
  }

  validateCompleted(taskName) {
    this.elements()
      .todoItemLabel(taskName)
      .closest('li')
      .should('have.class', 'completed');
  }

  validateNotCompleted(taskName) {
    this.elements()
      .todoItemLabel(taskName)
      .closest('li')
      .should('not.have.class', 'completed');
  }

  editTodo(oldName, newName) {
    cy.log(`Esperando que la tarea "${oldName}" aparezca`);
    cy.contains('.todo-list li', oldName).should('exist');
    cy.log('Activando modo edición');
    cy.contains('.todo-list li', oldName).dblclick();
    cy.log('Editando tarea en input único');
    cy.get('input.new-todo')
      .filter(':visible')
      .first()
      .type('{selectall}{backspace}')
      .type(`${newName}{enter}`);
    this.validateTodoExists(newName);
  }

  filterActive() {
    this.elements().filterActive().click();
  }

  filterCompleted() {
    this.elements().filterCompleted().click();
  }

  filterAll() {
    this.elements().filterAll().click();
  }
}

module.exports = TodoPage;
