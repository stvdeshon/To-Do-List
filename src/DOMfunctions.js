import Plan from './to-do-lists';
import PlanItem from './to-do-items';
import * as list from './lists-array.js';
import * as dynButton from './dynamic-buttons.js';
import {inputToggle} from './input-toggle.js';

// Delete buttons call removal method and deletes from DOM

// The newly created 'plan' buttons on the sidebar will populate the display with the corresponding object's data 
// That object's display will have an 'add item' button that will open a form that submits and creates a new item object
// The subsequent item button will populate the display and have a few functional buttons to edit the corresponding item object and change the DOM values

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
    console.log(list.planArray);
    plansList.appendChild(dynButton.createButton(newPlan.title));
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


//task creation
const itemsList = document.querySelector('#plan-items');
const addItem = document.querySelector('#add-item');
const itemForm = document.querySelector('#item-form-id');
addItem.addEventListener('click', () => {
    inputToggle.toggleOn(itemForm);
    inputToggle.toggleOff(planForm);
    planInput.value = ''//empties the input value of the other form
});

const itemInput = document.querySelector('#item-input');
const itemSubmit = document.querySelector('#item-submit');
function itemSubmitFunc(e) {
    e.preventDefault();
    let newItem = new PlanItem(itemInput.value);
    itemsList.appendChild(dynButton.createButton(newItem.title));
    itemInput.value = ''
    inputToggle.toggleOff(itemForm);
}
itemSubmit.addEventListener('click', itemSubmitFunc);

const itemCancel = document.querySelector('#item-cancel');
function itemCancelFunc(e) {
    e.preventDefault();
    itemInput.value = '';
    inputToggle.toggleOff(itemForm);
}

itemCancel.addEventListener('click', itemCancelFunc);


const planTitle = document.querySelector('#plan-title'); //this is where a project's title will be displayed on the main panel



//these two are sidebar elements and function similarly to the project buttons that will be appended under sidebarPlans in that they will display to the main panel
const miscBtn = document.querySelector('#misc');
const todayBtn = document.querySelector('#today');