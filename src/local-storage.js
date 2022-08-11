import * as list from './plans-array.js';
import Plan from './to-do-lists';
import PlanItem from './to-do-items';

export function storePlans() {
    localStorage.setItem('plans', JSON.stringify(list.planArray));
}

export function extractPlans() {
    const plans = JSON.parse(localStorage.getItem('plans'));
    list.planArray = [];
    console.log(plans)

    plans.forEach((obj) => {
        const reinstPlan = new Plan(obj._title);

        list.planArray.push(reinstPlan);

        for (let i = 0; i < obj._toDoItems.length; i++) {
            const reinstItem = new PlanItem(obj._title, obj._toDoItems[i]._title, obj._toDoItems[i]._dueDate);

            if(reinstPlan._title === reinstItem._parent) {
                    reinstPlan.toDoItems.push(reinstItem);  
            }
        }
    })
}