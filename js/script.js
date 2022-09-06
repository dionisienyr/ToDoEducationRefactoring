
const addTaskBtn = document.querySelector('.confirm-enabled__btn');
const title = document.getElementById('title__value');
const description = document.getElementById('description__value');
const due = document.getElementById('due__value'); 
const toDoWrapperNodes = document.querySelector('.wrapper-list')


let tasks;
!localStorage.tasks ? tasks = [] : tasks = JSON.parse(localStorage.getItem('tasks'));

const updateLocalStorage = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

if (addTaskBtn) {
addTaskBtn.addEventListener('click', () => {
    tasks.push({title: title.value, description: description.value, due: due.value});
    updateLocalStorage();
})
}

let toDoList = JSON.parse(localStorage.getItem('tasks'))
if(toDoWrapperNodes){

    for (let toDo in toDoList){
    let li = toDoWrapperNodes.appendChild(document.createElement('li'));
    let menuTask = li.appendChild(document.createElement('div'));
    let taskData = menuTask.appendChild(document.createElement('div'));
    let taskCheckbox = taskData.appendChild(document.createElement('input'));
    let taskP = taskData.appendChild(document.createElement('p'));
    let taskTitle = menuTask.appendChild(document.createElement('div'));
    let titleItem = taskTitle.appendChild(document.createElement('p'));

    li.className = "wrapper__item";
    menuTask.className = "menu-task";
    taskData.className = "menu-task-container__main";
    taskCheckbox.className = "menu-task__checkbox";
    taskCheckbox.name = "complete";
    taskCheckbox.type = "checkbox";
    taskP.className = "menu-task__due";
    taskP.innerHTML = toDoList[toDo].date

    taskTitle.className = "menu-task-container__side";
    titleItem.className = "menu-task__text";

    titleItem.innerHTML = toDoList[toDo].title
    }
}