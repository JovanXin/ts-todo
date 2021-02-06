"use strict";
function toggleTodo(todo) {
    return {
        id: todo.id,
        description: todo.description,
        place: todo.place,
        status: !todo.status,
    };
}
function markAllTodo(todos) {
    return todos.map((todo) => (Object.assign(Object.assign({}, todo), { status: true })));
}
function createTodo(data) {
    if (data.id > todos.length) {
        todos.push(data);
        return true;
    }
    else {
        return false;
    }
}
function deleteTodo(id) {
    todos = todos.filter((todo) => todo.id !== id);
}
let todos = [
    {
        id: 1,
        description: "Do laundry",
        status: false,
        place: "home",
    },
    {
        id: 2,
        description: "Email boss",
        status: false,
        place: "work",
    },
    {
        id: 3,
        description: "Go to gym",
        status: false,
        place: { custom: "Gym" },
    },
    {
        id: 4,
        description: "Buy milk",
        status: false,
        place: { custom: "Supermarket" },
    },
    { id: 5, description: "Read a book", status: false },
];
// Testing
todos[2] = toggleTodo(todos[2]);
console.log(todos[2]);
todos = markAllTodo(todos);
console.log(todos);
deleteTodo(3);
console.log(todos);
