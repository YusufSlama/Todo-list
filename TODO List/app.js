//Select DOM
const searchBtn = document.querySelector(".search-btn");
const searchbar = document.querySelector(".search-bar");
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//Event Listeners
searchBtn.addEventListener("click", findItem);
todoButton.addEventListener("click", addTodo);


//Functions

function findItem(e) {
    e.preventDefault();
    console.log("it's me!");
}

function addTodo(e) {
  //Prevent natural behaviour
  e.preventDefault();
  //Create todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //Create list
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;

  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  todoInput.value = "";
  //Create Completed Button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = `<i class="fas fa-check"></i>`;
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  //Create trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  //attach final Todo
  todoList.appendChild(todoDiv);
}

function deleteTodo(e) {
    const item = e.target;
  
    if (item.classList[0] === "trash-btn") {
      // e.target.parentElement.remove();
      const todo = item.parentElement;
      todo.classList.add("fall");
      //at the end
      removeLocalTodos(todo);
      todo.addEventListener("transitionend", e => {
        todo.remove();
      });
    }
    if (item.classList[0] === "complete-btn") {
      const todo = item.parentElement;
      todo.classList.toggle("completed");
      console.log(todo);
    }
  }