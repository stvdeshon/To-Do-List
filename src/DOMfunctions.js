import Plan from './to-do-lists';
import PlanItem from './to-do-items';
import * as lists from './lists-array.js';
import * as dynButton from './dynamic-buttons.js';
import {planForm, projectInputToggle} from './input-toggle.js';

// Add character limit to PlanItem titles

// Delete buttons call removal method and deletes from DOM

// The newly created 'plan' buttons on the sidebar will populate the display with the corresponding object's data 
// That object's display will have an 'add item' button that will open a form that submits and creates a new item object
// The subsequent item button will populate the display and have a few functional buttons to edit the corresponding item object and change the DOM values


const newPlans = document.querySelector('#lower-sidebar'); //will have plan titled buttons appended to it

const newPlanBtn = document.querySelector('#add-plans'); //creates and appends a modal form to title and submit a new plan to sideBarPlans

const planInput = document.querySelector('#plan-input');
const planSubmit = document.querySelector('#plan-submit');
const planCancel = document.querySelector('#plan-cancel');
const plansList = document.querySelector('#plans-list');


function planSubmitFunc(e) {
    e.preventDefault();
    let newPlan = new Plan(planInput.value);
    lists.pushPlan(newPlan);
    console.log(lists.planArray);
    plansList.appendChild(dynButton.createButton(newPlan.title));
    planInput.value = ''
    planForm.classList.remove('visible');
    planForm.classList.add('plan-form-class');
}

function planCancelFunc(e) {
    e.preventDefault();
    planInput.value = '';
    planForm.classList.remove('visible');
    planForm.classList.add('plan-form-class');
}

newPlanBtn.addEventListener('click', projectInputToggle);
planSubmit.addEventListener('click', planSubmitFunc);
planCancel.addEventListener('click', planCancelFunc);


//these two are sidebar elements and function similarly to the project buttons that will be appended under sidebarPlans in that they will display to the main panel
const miscBtn = document.querySelector('#misc');
const todayBtn = document.querySelector('#today');


//the following elements will be the form for adding a new project


const planTitle = document.querySelector('#plan-title'); //this is where a project's title will be displayed on the main panel
const taskList = document.querySelector('#plan-items'); //this div should have task cards with their own functionality appended to it
