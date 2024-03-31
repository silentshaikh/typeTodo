import inquirer from "inquirer";
interface Todo{
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
      default: "false",
    },
    {
      name: "confirmRemoveTodo",
      type: "confirm",
      message: "Do you want to remove a Todo",
      default: "false",
    },
  ]);
  // Confirm for Todo is null or not null
  if (addTodo.todo === "") {
    console.log("Please add a todo");
  } else {
    todoList.push({ id: count++, todo: addTodo.todo});
  }
  isCondition = addTodo.moreTodos;
  console.log(todoList);
  // Remove a Todo
  let isRemTodo = addTodo.confirmRemoveTodo;
  if (isRemTodo) {
    let remTodo = await inquirer.prompt([
      {
        name: "removeTodo",
        type: "number",
        message: "Enter a id for remove a Todo",
      },
    ]);
    // Filterable Todo
    const removeTodos = (todoId:number) => {
      let delTodo:Todo[] = todoList.filter((e) => {
        return e.id !== todoId  
      })
      todoList =  delTodo;
    }
    // Find Todo ID
    let findId:Todo | undefined = todoList.find((e) => e.id === remTodo.removeTodo) 
   if(findId){
    removeTodos(remTodo.removeTodo);
    console.log("After Remove a Todo");
    console.log(todoList);
   }else{
    console.log(`The ID ${remTodo.removeTodo} is not available`);
   }
  }
}
