import Plan from './to-do-lists';
import PlanItem from './to-do-items';

// Add character limit to PlanItem titles

// Delete buttons call removal method and deletes from DOM

// The add plan button calls up a form, submitting the form instantiates a new Plan object and populates the sidebar with it

// The newly created 'plan' buttons on the sidebar will populate the display with the corresponding object's data 
// That object's display will have an 'add item' button that will open a form that submits and creates a new item object
// The subsequent item button will populate the display and have a few functional buttons to edit the corresponding item object and change the DOM values


const newPlans = document.querySelector('#new-plans'); //will have plan titled buttons appended to it

const newPlanBtn = document.querySelector('#add-plans'); //creates and appends a modal form to title and submit a new plan to sideBarPlans
const planForm = document.querySelector('#aaa');
const planInput = document.querySelector('#plan-input');
const planSubmit = document.querySelector('#plan-submit');
const planCancel = document.querySelector('#plan-cancel');


function projectInputFunc() {
    planForm.classList.remove('plan-form');
    planForm.classList.add('visible');
}

function planSubmitFunc(e) {
    
    console.log(new Plan(planInput.value));
    //someArray.push(new Plan (planinput.value and so forth))
    //append array as buttons to div id='plans';
    planInput.value = ''
    planForm.classList.remove('visible');
    planForm.classList.add('plan-form');
    e.preventDefault();
}

function planCancelFunc(e) {
    planInput.value = ''; // may not be necessary
    planForm.classList.remove('visible');
    planForm.classList.add('plan-form');
    e.preventDefault();
}

newPlanBtn.addEventListener('click', projectInputFunc);
planSubmit.addEventListener('click', planSubmitFunc);
planCancel.addEventListener('click', planCancelFunc);

// I might need an array of todolist projects themselves to store them and append then in order







//these two are sidebar elements and function similarly to the project buttons that will be appended under sidebarPlans in that they will display to the main panel
const miscBtn = document.querySelector('#misc');
const todayBtn = document.querySelector('#today');


//the following elements will be the form for adding a new project


const planTitle = document.querySelector('#plan-title'); //this is where a project's title will be displayed on the main panel
const taskList = document.querySelector('#plan-items'); //this div should have task cards with their own functionality appended to it