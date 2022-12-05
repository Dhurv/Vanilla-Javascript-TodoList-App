//selector
const todo = document.querySelector("#todoText")
const todoAddbutton = document.querySelector("#todoAddBtn")
const ulTodoList = document.querySelector(".todoListUL")

//Event Listner

todoAddbutton.addEventListener('click', addTodo);
ulTodoList.addEventListener('click', deleteTodo);
ulTodoList.addEventListener('dblclick', marked);

//Function

function addTodo(){
    const value = todo.value;
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
        item.remove();
    }

    if(itemClicked.classList[0] === "editTodoList"){
        editTodo(e)
        const item = e.target.parentElement;
        item.remove();
    }
}

function editTodo(val){
    const todoText = val.target.parentElement.firstChild.innerText;
    todo.value = todoText
}

function marked(e) {
    console.log(e.target)
    const value = e.target;
    console.log(value)
    value.style.textDecoration = "line-through";
    value.style.opacity = "0.5"
}
