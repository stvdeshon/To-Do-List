export const planArray = [];

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

    

},

    // displayTasks: function(target) { 

    //     function displayToDom() {
    //     const index = planArray.findIndex(obj => obj.title === target.textContent);
    //     return index;
    //     }

    //     planArray.forEach((obj) => {
    //         if(obj.title === target.textContent) {
                
    //             console.log(obj.toDoItems());
    //         }
    //     })
    // }
}



