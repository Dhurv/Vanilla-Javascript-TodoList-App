//selector
const todo = document.querySelector("#todoText")
const todoAddbutton = document.querySelector("#todoAddBtn")
const ulTodoList = document.querySelector(".todoListUL")

//Event Listner

todoAddbutton.addEventListener('click', addTodo);
ulTodoList.addEventListener('click', deleteTodo);
ulTodoList.addEventListener('dblclick', marked);

//loading all todos on page load for first time or refresh
document.addEventListener('DOMContentLoaded', () => {
    
    var todos = JSON.parse(localStorage.getItem('todo'))
    console.log(todos)
    todos.forEach(todo => {
        createTodoComponent(todo)
    });
})



//Function
var todoList = []
function addTodo(){
    const value = todo.value;
    todoList.push(value)
    localStorage.setItem('todo', JSON.stringify(todoList))
    createTodoComponent(value)
    todo.value = '';
}

function createTodoComponent(todoValue) {
    const div = document.createElement('div');
    div.classList.add('todoListDiv');
    const li = document.createElement('li')
    li.classList.add('todoListLi')
    li.innerText = todoValue;
    div.appendChild(li)
    const delButton = document.createElement('button')
    delButton.classList.add('deleteTodoList')
    delButton.innerText = 'Del';
    div.appendChild(delButton)
    const editButton = document.createElement('button')
    editButton.classList.add('editTodoList')
    editButton.innerText = 'Edit';
    div.appendChild(editButton)
    ulTodoList.appendChild(div)

}

function deleteTodo(e) {
    const itemClicked = e.target;
    if(itemClicked.classList[0] === "deleteTodoList"){
        const item = e.target.parentElement;
        let todoItem = item.children[0].innerText;
        deleteTodoFromLocal(todoItem);
        item.remove();
    }

    if(itemClicked.classList[0] === "editTodoList"){
        editTodo(e)
        const item = e.target.parentElement;
        let todoItem = item.children[0].innerText;
        deleteTodoFromLocal(todoItem);
        item.remove();
    }
}

function editTodo(val){
    const todoText = val.target.parentElement.firstChild.innerText;
    todo.value = todoText
}

function marked(e) {
    const value = e.target;
    value.style.textDecoration = "line-through";
    value.style.opacity = "0.5"
}

function deleteTodoFromLocal(todo){
    if(localStorage.getItem('todo') !== null){
        todoList = JSON.parse(localStorage.getItem('todo'))
    }
    let index = todoList.indexOf(todo)
    todoList.splice(index, 1);
    localStorage.setItem('todo', JSON.stringify(todoList))
}
