Feature: Gestión de tareas en TodoMVC

  Scenario: Crear tarea
    Given Abro la aplicación TodoMVC
    When Agrego la tarea "Comprar comida"
    Then La tarea "Comprar comida" debe existir en la lista

  Scenario: Marcar tarea como completada
    Given Abro la aplicación TodoMVC
    When Agrego la tarea "Estudiar JavaScript"
    And Marco la tarea "Estudiar JavaScript" como completada
    Then La tarea "Estudiar JavaScript" debe estar completada

  Scenario: Desmarcar tarea completada
    Given Abro la aplicación TodoMVC
    When Agrego la tarea "Hacer ejercicio"
    And Marco la tarea "Hacer ejercicio" como completada
    And Desmarco la tarea "Hacer ejercicio"
    Then La tarea "Hacer ejercicio" no debe estar completada

  Scenario: Editar tarea
    Given Abro la aplicación TodoMVC
    When Agrego la tarea "Aprender Cypress"
    And Edito la tarea "Aprender Cypress" por "Aprender Cypress + Cucumber"
    Then La tarea "Aprender Cypress + Cucumber" debe existir en la lista

  Scenario: Borrar tarea
    Given Abro la aplicación TodoMVC
    When Agrego la tarea "Comprar carne"
    And Elimino la tarea "Comprar carne"
    Then La tarea "Comprar carne" no debe existir en la lista

  Scenario: Filtrar tareas
    Given Abro la aplicación TodoMVC
    When Agrego la tarea "Tarea 1"
    And Agrego la tarea "Tarea 2"
    And Marco la tarea "Tarea 1" como completada
    Then Filtro por tareas completadas debe mostrar "Tarea 1"
    And Filtro por tareas no completadas debe mostrar "Tarea 2"
    And Filtro "All" debe mostrar "Tarea 1" y "Tarea 2"
  # Línea eliminada: nombres inconsistentes con las tareas creadas en este escenario
