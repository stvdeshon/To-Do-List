import Plan from './to-do-lists';
import PlanItem from './to-do-items';

// Add character limit to PlanItem titles

// Delete buttons call removal method and deletes from DOM

// The add plan button calls up a form, submitting the form instantiates a new Plan object and populates the sidebar with it

// The newly created 'plan' buttons on the sidebar will populate the display with the corresponding object's data 
// That object's display will have an 'add item' button that will open a form that submits and creates a new item object
// The subsequent item button will populate the display and have a few functional buttons to edit the corresponding item object and change the DOM values

const userInterface = (() => {

})();

//these two are sidebar elements and function similarly to the project buttons that will be appended under sidebarPlans in that they will display to the main panel
const miscBtn = document.querySelector('#misc');
const todayBtn = document.querySelector('#today');


const newPlanBtn = document.querySelector('#add-plans'); //creates and appends a modal form to title and submit a new plan to sideBarPlans

//the following elements will be the form for adding a new project
const addPlan = document.createElement('div');
addPlan.setAttribute('id', 'plan-form');
const planSubmit = document.createElement('button'); //will append the user submitted title to sideBarPlans
planSubmit.setAttribute('id', 'plan-submit');
const planCancel = document.createElement('button');
planCancel.setAttribute('id', 'plan-cancel');
const sidebarPlans = document.querySelector('#new-plans'); //will have plan titled buttons appended to it

const planTitle = document.querySelector('#plan-title'); //this is where a project's title will be displayed on the main panel
const taskList = document.querySelector('#plan-items'); //this div should have task cards with their own functionality appended to it