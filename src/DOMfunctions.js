import Plan from './to-do-lists';
import PlanItem from './to-do-items';
import * as list from './plans-array.js';
import * as dynButton from './dynamic-buttons.js';
import {inputToggle} from './input-toggle.js';

// Delete buttons call removal method and deletes from DOM

// The newly created 'plan' buttons on the sidebar will populate the display with the corresponding object's data 
// That object's display will have an 'add item' button that will open a form that submits and creates a new item object
// The subsequent item button will populate the display and have a few functional buttons to edit the corresponding item object and change the DOM values


const plansPanel = document.querySelector('#plans-panel');
const planTitle = document.querySelector('#plan-title');

//project creation
const newPlanBtn = document.querySelector('#add-plans'); 
const planForm = document.querySelector('#plan-form-id');
newPlanBtn.addEventListener('click', () => {
    inputToggle.toggleOn(planForm);
    inputToggle.toggleOff(itemForm);
    itemInput.value = '';//empties the input value of the other form
});

const plansList = document.querySelector('#plans-list');
const planInput = document.querySelector('#plan-input');
const planSubmit = document.querySelector('#plan-submit');
function planSubmitFunc(e) {
    e.preventDefault();
    let newPlan = new Plan(planInput.value);
    list.pushPlan(newPlan);
    plansList.appendChild(dynButton.createButton(newPlan.title, 'plan-buttons'));
    planInput.value = ''
    inputToggle.toggleOff(planForm);
}
planSubmit.addEventListener('click', planSubmitFunc);

const planCancel = document.querySelector('#plan-cancel');
function planCancelFunc(e) {
    e.preventDefault();
    planInput.value = '';
    inputToggle.toggleOff(planForm);
}
planCancel.addEventListener('click', planCancelFunc);

//project dom display
const todayBtn = document.querySelector('#today');

const itemsList = document.querySelector('#plan-items');

plansList.addEventListener('click', function(e) {

    planTitle.textContent = e.target.textContent;
    trash.className = e.target.id;
    trash.style.display = 'block';
    itemsList.innerHTML = '';
    console.log(list.planArray);

    list.planArray.forEach((obj) => {
        obj.toDoItems.forEach((item) => {
            if(obj.title === e.target.textContent) {
                itemsList.innerHTML = '';
                for (let i = 0; i< obj.toDoItems.length; i++){
                itemsList.innerHTML += `
                <div class="item-buttons">
                    <div class="item-buttons-left">
                    <p class="item-title" id="${obj.toDoItems[i].title}">${obj.toDoItems[i].title}</p>
                    </div>
                    <div class="item-buttons-right">
                        <input type="date" class="due-date" id="${obj.toDoItems[i].title}">
                        <button class="x" id="${obj.toDoItems[i].title}">x</button>
                    </div>
                </div>`; 
                }
            }
            })
    })
})


const trash = document.querySelector('#trash');
trash.addEventListener('click', (e) => {
planTitle.textContent = '';
dynButton.btnDel(trash, '.plan-buttons');
const target = e.target;
list.arrayDel.del(trash);
trash.className = '';
})

const primary = new Plan('Primary');
const primaryBtn = document.querySelector('#primary');

export default function primaryLoad(e) {
    planTitle.textContent = primary.title;
    trash.style.display = 'none';
    itemsList.innerHTML = '';
    console.log(primary);
    primary.toDoItems.forEach((item) => {
            itemsList.innerHTML = '';
            for (let i = 0; i < primary.toDoItems.length; i++){
            itemsList.innerHTML += `
                <div class="item-buttons">
                    <div class="item-buttons-left">
                    <p class="item-title" id="${primary.toDoItems[i].title}">${primary.toDoItems[i].title}</p>
                    </div>
                    <div class="item-buttons-right">
                        <input type="date" class="due-date" id="${primary.toDoItems[i].title}">
                        <button class="primary-x" id="${primary.toDoItems[i].title}">x</button>
                    </div>
                </div>`; 
                }  
        })
}

primaryBtn.addEventListener('click', primaryLoad);



//task creation

const addItem = document.querySelector('#add-item');
const itemForm = document.querySelector('#item-form-id');

//event listener for the 'New Task' button and the form it brings up
addItem.addEventListener('click', () => {
    inputToggle.toggleOn(itemForm);
    inputToggle.toggleOff(planForm);
    planInput.value = ''//empties the input value of the other form
});


// event listener for the form's submit button
const itemInput = document.querySelector('#item-input');
const itemSubmit = document.querySelector('#item-submit');
function itemSubmitFunc(e) {
    e.preventDefault();
    let newItem = new PlanItem(planTitle.textContent, itemInput.value); //planTitle.textcontent is just an argument to match the task with the project of the same name
    //the following condition matches the DOM title with the task's parent list property
    if(planTitle.textContent === newItem.parent && planTitle.textContent !== 'Primary'){
        list.itemToList.addTask(planTitle, newItem);
        // itemsList.appendChild(dynButton.createButton(newItem.title, 'item-buttons'));
        itemsList.innerHTML += `
            <div class="item-buttons">
                <div class="item-buttons-left">
                    <p class="item-title" id="${newItem.title}">${newItem.title}</p>
                </div>
                <div class="item-buttons-right">
                    <input type="date" class="due-date" id="${newItem.title}">
                    <button class="x" id="${newItem.title}">x</button>
                </div>
            </div>`;
        itemInput.value = ''
        inputToggle.toggleOff(itemForm);
    } else if (planTitle.textContent === 'Primary') {
        primary.addToDoItems(newItem);
        // itemsList.appendChild(dynButton.createButton(newItem.title, 'item-buttons'));
        itemsList.innerHTML += `
            <div class="item-buttons">
                <div class="item-buttons-left">
                    <p class="item-title" id="${newItem.title}">${newItem.title}</p>
                </div>
                <div class="item-buttons-right">
                    <input type="date" class="due-date" id="${newItem.title}">
                    <button class="primary-x" id="${newItem.title}">x</button>
                </div>
            </div>`;
        itemInput.value = ''
        inputToggle.toggleOff(itemForm);

    }
}

itemSubmit.addEventListener('click', itemSubmitFunc);

const itemCancel = document.querySelector('#item-cancel');
function itemCancelFunc(e) {
    e.preventDefault();
    itemInput.value = '';
    inputToggle.toggleOff(itemForm);
}

itemCancel.addEventListener('click', itemCancelFunc);


//item bar functions
const dueDate = document.querySelectorAll('.due-date');

//task delete button functionality
itemsList.addEventListener('click', (e) => {
    if(e.target.className === 'x') {
        list.planArray.forEach((obj) => {
            obj.toDoItems.forEach((item) => {
                if(obj.title === planTitle.textContent) {
                    obj.removeToDoItems(e.target.id);
                    itemsList.innerHTML = '';
                }
            })
            for (let i = 0; i< obj.toDoItems.length; i++) {
            itemsList.innerHTML += `
            <div class="item-buttons">
                <div class="item-buttons-left">
                <p class="item-title" id="${obj.toDoItems[i].title}">${obj.toDoItems[i].title}</p>
                </div>
                <div class="item-buttons-right">
                    <input type="date" class="due-date" id="${obj.toDoItems[i].title}">
                    <button class="x" id="${obj.toDoItems[i].title}">x</button>
                </div>
            </div>`; 
            }
        })
    }
    if(e.target.className === 'primary-x') {
        primary.toDoItems.forEach(() => {
                if(primary.title === planTitle.textContent) {
                    primary.removeToDoItems(e.target.id);
                    itemsList.innerHTML = '';
                }
            })
            for (let i = 0; i< primary.toDoItems.length; i++) {
            itemsList.innerHTML += `
            <div class="item-buttons">
                <div class="item-buttons-left">
                <p class="item-title" id="${primary.toDoItems[i].title}">${primary.toDoItems[i].title}</p>
                </div>
                <div class="item-buttons-right">
                    <input type="date" class="due-date" id="${primary.toDoItems[i].title}">
                    <button class="primary-x" id="${primary.toDoItems[i].title}">x</button>
                </div>
            </div>`; 
            }
        }
})