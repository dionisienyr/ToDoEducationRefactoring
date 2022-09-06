const loadMore = document.querySelector('.load-more__btn');
const taskCount = document.querySelectorAll('.wrapper__item').length;
const deleteElements = document.querySelector('.delete__btn');
const modalOverlay = document.querySelector('.modal-overlay')

const acceptDeleteBtn = document.querySelector('.delete-accept__btn')
const cancelDeleteBtn = document.querySelector('.delete-cancel__btn')
let items = 8;


const printCountValue = () => {
    let taskCountValue = document.querySelector('.info-quantity');
    taskCountValue.innerHTML = taskCount;
}



loadMore.addEventListener('click', () => {
    items += 5 
    const arrayElements = Array.from(document.querySelector('.wrapper-list').children);
    const showItems = arrayElements.slice(0, items);

    showItems.forEach(el => el.classList.add('is-visible'));
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

printCountValue()
acceptDeleteBtn.addEventListener("click",() => {

    let checkbox = document.querySelectorAll(".menu-task-container__main input[type='checkbox']:checked")
    checkbox.forEach(item => {
        item.closest('.menu-task').remove()
        
    });
    printCountValue()

    
});

loadMore.removeEventListener('click', addEventListener, false)
deleteElements.removeEventListener('click', addEventListener,false);
modalOverlay.removeEventListener('click', addEventListener, false)
acceptDeleteBtn.removeEventListener('click', addEventListener, false)