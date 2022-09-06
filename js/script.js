const addTaskBtn = document.querySelector('.confirm-enabled__btn');
const titleAdd = document.getElementById('title__value');
const descrAdd = document.getElementById('description__value');
const dueAdd = document.getElementById('due__value'); 

const todosWrapper = document.querySelector('.wrapper-list')


let tasks;
!localStorage.tasks ? tasks = [] : tasks = JSON.parse(localStorage.getItem('tasks'));

function Task(title, description, date){
    this.title = title;
    this.description = description;
    this.date = date;
    this.completed = false;
}



//const fillHtmlList = () => {
//    todosWrapper.innerHTML = "";
//    if(tasks.length > 0) {
//        tasks.forEach((item, index) => {
//            todosWrapper.innerHTML += createTemplate(item, index)
//        })
//    }
//}

const updateLocalStorage = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

if (addTaskBtn) {
addTaskBtn.addEventListener('click', () => {
    tasks.push(new Task(titleAdd.value, descrAdd.value, dueAdd.value));
    updateLocalStorage();
})
}



//const createTemplate = (test) => {
//    return `
//        <li class="wrapper__item">
//            <div class="menu-task">
//                <div class="menu-task-container__main">
//                    <input type="checkbox" name="complete" class="menu-task__checkbox">
//                    <p class="menu-task__due">${test[0].date}</p>
//                </div>
//                <div class="menu-task-container__side">
//                    <p class="menu-task__text">${test[0].title}</p>
//                </div>
//            </div>
//        </li>
//    `
//}

let toDoList = JSON.parse(localStorage.getItem('tasks'))
//console.log(toDoList)
if(todosWrapper){
    for (let toDo in toDoList){
    let li = todosWrapper.appendChild(document.createElement('li'));
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