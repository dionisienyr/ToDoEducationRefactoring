const loadMore = document.querySelector('.load-more__btn');
const taskLength = document.querySelectorAll('.wrapper__item').length;
const deleteElements = document.querySelector('.delete__btn');
const modalOverlay = document.querySelector('.modal-overlay')
const modalWindow = document.querySelector('.modal-window');
//const taskCheckbox = document.querySelectorAll(".menu-task-container__main input[type='checkbox']:checked");

const acceptDeleteBtn = document.querySelector('.delete-accept__btn')
const cancelDeleteBtn = document.querySelector('.delete-cancel__btn')
let items = 8;
    

    console.log(taskLength)

const printQuantity = () => {
    let taskQuantity = document.querySelector('.info-quantity');
    taskQuantity.innerHTML = taskLength;
}



loadMore.addEventListener('click', () => {
    items += 5 
    const arrayElem = Array.from(document.querySelector('.wrapper-list').children);
    const visItems = arrayElem.slice(0, items);

    visItems.forEach(el => el.classList.add('is-visible'));
});

deleteElements.addEventListener('click', (el) => {
    let path = el.currentTarget.getAttribute('data-path');


    document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
    modalOverlay.classList.add('modal-overlay--visible');
});


modalOverlay.addEventListener('click', (e) => {
    if(e.target == modalOverlay){
    modalOverlay.classList.remove('modal-overlay--visible');
    }
    if(e.target == cancelDeleteBtn){
        modalOverlay.classList.remove('modal-overlay--visible');
    }
    if(e.target == acceptDeleteBtn){
        modalOverlay.classList.remove('modal-overlay--visible');
    }
});


//function remove(elem){
//    let items = document.getElementsByClassName(elem).querySelectorAll(".menu-task-container__main input[type='checkbox']:checked");
//    items.forEach(item => item.closest('.menu-task-container__main').remove());
//}
printQuantity()
acceptDeleteBtn.addEventListener("click",() => {

    let checkbox = document.querySelectorAll(".menu-task-container__main input[type='checkbox']:checked")
    checkbox.forEach(item => {
        item.closest('.menu-task').remove()
        
    });
    printQuantity()
    
    
    
    
    //checkbox.closest('.menu-task').remove();
//let list = document.querySelectorAll(".menu-task");
    //console.log(list);
    //items += 1
    //const arrayElem = Array.from(document.querySelector('.wrapper-list').children);
    //const visItems = arrayElem.slice(0, items);

    //visItems.forEach(el => el.classList.add('is-visible'));
});

