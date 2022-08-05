import * as list from './plans-array.js';
import Plan from './to-do-lists';
import PlanItem from './to-do-items';

export function storePlans() {
    localStorage.setItem('plans', JSON.stringify(list.planArray));
}

export function extractPlans() {
    const widget = JSON.parse(localStorage.getItem('plans'));
    list.planArray = [];
    console.log(widget)
    // console.log(typeof widget);

    widget.forEach((obj) => {
        const reinstPlan = new Plan(obj._title);
        list.planArray.push(reinstPlan);
        // console.log(list.planArray);
        for (let i = 0; i < obj._toDoItems.length; i++) {


                let reinstItem = new PlanItem(obj._title, obj._toDoItems[i]._title, obj._toDoItems[i]._dueDate);
                if(reinstPlan.title === reinstItem.parent){

                list.planArray.forEach((pl) => {
                    pl.toDoItems.push(reinstItem);  
                })
            

        
            }
        }
       })
       console.log(list.planArray);
}


// new Plan('title');
// new PlanItem('parent', 'title', 'dueDate');
// push newplans to planarray, push new planitems to parent plan
// JSON.parse(localStorage.getItem('plans'));
// && planTitle.textContent !== 'Primary'

        //  console.log(obj._toDoItems[i]._title);