#! /usr/bin/env node
import inquirer from "inquirer";
interface Todo {
  id: number;
  todo: string;
}
let todoList: Todo[] = [];
let count: number = 0;
let isCondition: boolean = true;
// Add a Todo
while (isCondition) {
  let addTodo = await inquirer.prompt([
    { name: "todo", type: "input", message: "Enter Your Todo" },
    {
      name: "moreTodos",
      type: "confirm",
      message: "Do you want to add more Todos",
      default: true,
    },
  ]);
  // Confirm for Todo is empty or not empty
  if (addTodo.todo === "") {
    console.log("Please add a todo");
  } else {
    todoList.push({ id: count++, todo: addTodo.todo });
  }
  isCondition = addTodo.moreTodos;
};
todoList.forEach((e) => {
  console.log(`${e.id}) ${e.todo}`);
});
// Edit a Todo
isCondition = true;
while (isCondition) {
  // confirm for edit a todo
  let editTodo = await inquirer.prompt([
    {
      name: "confirmEditTodo",
      type: "confirm",
      message: "Do you want to edit Todo",
      default: true,
    },
  ]);
  if(todoList.length === 0){
    console.log(`You Don't edit a todo because the todo-list is empty`);
    break;
  }else{
  isCondition = editTodo.confirmEditTodo;
  //enter id for  edit a todo
  if (isCondition) {
    let editTodoId = await inquirer.prompt([
      {
        name: "editTodo",
        type: "number",
        message: "Enter a id for edit a Todo",
      },
    ]);
    // find id of todo for edit
    let findEditId: Todo | undefined = todoList.find(
      (e) => e.id === editTodoId.editTodo
    );
    // check id is available or not
    if (findEditId) {
      let editTdoValue = await inquirer.prompt([
        { name: "editValue", type: "input", message: "Edit a Todo" },
      ]);
      // check edit value is empty or not
      if(editTdoValue.editValue === ''){
        console.log('Please Enter a task for edit a todo');
      }else{
        findEditId.todo = editTdoValue.editValue;
      }
    } else {
      console.log(`The ID ${editTodoId.editTodo} is not available`);
    }
  }
}
};
if(todoList.length !== 0){
  console.log("After Edit a Todo-list");
todoList.forEach((e) => {
  console.log(`${e.id}) ${e.todo}`);
});
};
// Remove a Todo
isCondition = true;
while (isCondition) {
  // confirm for edit a todo
  let remTodo = await inquirer.prompt([
    {
      name: "confirmRemoveTodo",
      type: "confirm",
      message: "Do you want to remove a Todo",
      default: true,
    },
  ]);
  if(todoList.length === 0){
    console.log(`You Don't delete a todo because the todo-list is empty`);
    break;
  }else{
  isCondition = remTodo.confirmRemoveTodo;
  // enter id for  delete a todo
  if (isCondition) {
    let remTodoId = await inquirer.prompt([
      {
        name: "removeTodo",
        type: "number",
        message: "Enter a id for remove a Todo",
      },
    ]);
    // Filterable Todos
    const removeTodos = (todoId: number) => {
      let delTodo: Todo[] = todoList.filter((e) => {
        return e.id !== todoId;
      });
      todoList = delTodo;
    };
    // // find id of todo for edit
    let findId: Todo | undefined = todoList.find(
      (e) => e.id === remTodoId.removeTodo
    );
    // check id is available or not
    if (findId){
      removeTodos(remTodoId.removeTodo);
    }else{
      console.log(`The ID ${remTodoId.removeTodo} is not available`);
    }
  }
}
  if(todoList.length === 0){
    break;
  }
};
if(todoList.length === 0){
  console.log('All Task delete from Todo-list, Now Todo-list is Empty');
}else{
  console.log("After Remove a Todo-list");
todoList.forEach((e) => {
  console.log(`${e.id}) ${e.todo}`);
});
}
