export const planArray = [];

export function pushPlan(plan) {
    planArray.push(plan)
}

export const arrayDel = {

    del: function (element) {

        function splitArray() { 
            const index = planArray.findIndex(obj => obj.title === element.className);
            return index;
        }

        planArray.forEach((obj) => {
            if (element.classList.contains(obj.title)) {
                planArray.splice(splitArray(), 1);
            }
        });
    }

}