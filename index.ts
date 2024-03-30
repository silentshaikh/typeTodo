import inquirer from 'inquirer';
interface Todo{
    id:number,
    todo:string
}
let todoList:Todo[] = [];
let count:number = 0;
let isCondition:boolean = true;
while(isCondition){
let addTodo = await inquirer.prompt([
    {name:'todo',type:'input',message:'Enter Your Todo'},
    {name:'moreTodos',type:'confirm',message:'Do you want to add more Todos',default:"false"}
]);
    if(addTodo.todo === ""){
        console.log("Please add a todo");
    }
    else{
        todoList.push({id:++count,todo:addTodo.todo});
    }
    isCondition = addTodo.moreTodos;
    console.log(todoList);
}
