import inquirer from 'inquirer';
let todoList = [];
let count = 0;
let isCondition = true;
while (isCondition) {
    let addTodo = await inquirer.prompt([
        { name: 'todo', type: 'input', message: 'Enter Your Todo' },
        { name: 'moreTodos', type: 'confirm', message: 'Do you want to add more Todos', default: "false" }
    ]);
    if (addTodo.todo === "") {
        console.log("Please add a todo");
    }
    else {
        todoList.push({ id: ++count, todo: addTodo.todo });
    }
    isCondition = addTodo.moreTodos;
    console.log(todoList);
}
