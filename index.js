import inquirer from "inquirer";
let todoList = [];
let count = 0;
let isCondition = true;
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
    if (addTodo.todo === "") {
        console.log("Please add a todo");
    }
    else {
        todoList.push({ id: count++, todo: addTodo.todo });
    }
    isCondition = addTodo.moreTodos;
    console.log(todoList);
    let isRemTodo = addTodo.confirmRemoveTodo;
    if (isRemTodo) {
        let remTodo = await inquirer.prompt([
            {
                name: "removeTodo",
                type: "number",
                message: "Enter a id for remove a Todo",
            },
        ]);
        const removeTodos = (todoId) => {
            let delTodo = todoList.filter((e) => {
                return e.id !== todoId;
            });
            todoList = delTodo;
        };
        let findId = todoList.find((e) => e.id === remTodo.removeTodo);
        if (findId) {
            removeTodos(remTodo.removeTodo);
            console.log("After Remove a Todo");
            console.log(todoList);
        }
        else {
            console.log(`The ID ${remTodo.removeTodo} is not available`);
        }
    }
}
