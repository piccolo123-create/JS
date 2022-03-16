import { todoApi } from './todoApis.js';

/*
Given an Api, implement a todo app(features includes Add a todo, Change a todo Status, Delete Todo) in Vanilla JavaScript.
FYI: You can add some css styles you want.
*/

//implement your app here;
todoApi.getAllTodos().then(r => console.log(r));

document.querySelector('form').addEventListener('submit', handleSubmitForm);

function handleSubmitForm(e) {
    e.preventDefault();
    let input = document.querySelector('input');

    const todo = {content: input.value, isCompleted: false};
    todoApi.addTodo(todo).then(r => console.log(r));

    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.innerHTML = `
        <span class="todo-item">${todo.content}</span>
        <button name="change"><i class="add"></i>Change</button>
        <button name="delete" ><i class="clear"></i>Delete</button>
    `;
    li.classList.add('todo-list-item');
    ul.appendChild(li);
    input.value = '';

    todoApi.getAllTodos().then(r => console.log(r));
}


//todoApi.delTodo(1).then(r => console.log(r));


