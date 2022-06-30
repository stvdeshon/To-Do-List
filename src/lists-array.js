//this module holds the array of projects that populate the sidebar and the functions for adding and removing them

export const planArray = []; //the array items will be pushed to the #plans-list div 

export function pushPlan(plan) {
    planArray.push(plan)
}

export function splitPlan() {
    //if value === text conditional here
    planArray.split()//removes associated plan from array of objects
}