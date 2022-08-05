import { format } from "date-fns";
import Plan from './to-do-lists';

const primaryPlan = new Plan('Primary');

export let planArray = [primaryPlan];

export function pushPlan(plan) {
    planArray.push(plan)
}

export const arrayDel = {

    del: function (element) {

        function splitArray() { 
            const index = planArray.findIndex(obj => obj.title === element.className);//element in this case refers to the delete button's class
            return index;
        }

        planArray.forEach((obj) => {
            if (element.classList.contains(obj.title)) {
                planArray.splice(splitArray(), 1);
            }
        });
    }

}

export const itemToList = {

    addTask: function (title, task) {

        function pushToProject() {
        const index = planArray.findIndex(obj => obj.title === title.textContent);//element here refers to the project's title DOM element
        return index;
        }

        planArray.forEach((obj) => {
            if(title.textContent === obj.title) {
                obj.addToDoItems(task);
                console.log(obj);
            }
        });
    }
}

export function plansToday() {

    let today = format(new Date(), 'LLL dd, yyyy');
    const todayArray = [];

    planArray.forEach((obj) => {
        obj.toDoItems.forEach((item) => {
            for (let i = 0; i< obj.toDoItems.length; i++){
                if(obj.toDoItems[i].dueDate === today && !todayArray.includes(obj.toDoItems[i])) {
                    todayArray.push(obj.toDoItems[i]);
                }
        }
        })
    })
    return todayArray;
}

