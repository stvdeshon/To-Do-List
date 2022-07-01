//this module holds the array of projects that populate the sidebar and the functions for adding and removing them

export const planArray = []; //the array items will be pushed to the #plans-list div 
const title = document.getElementById('plan-title');
export function pushPlan(plan) {
    planArray.push(plan)
}

export function splitArray(plan) {
    
    const index = planArray.findIndex(obj => obj.title === title.textContent);
    return index;
}

export function deletePlan() {

    const btn = document.querySelectorAll('.dynamic-buttons');
    planArray.forEach((obj) => {
        if (obj.title === title.textContent) {
            planArray.splice(splitArray(), 1);
        }
    })
}

//the delete button needs to be directly tagged and associated to the specific project
//when opening a project it must needs to furnish a delete button that takes an associated id

/* the following is pasted as a memory aid */

// removeBook.addEventListener('click', () => {
//     const title = document.getElementById('book-title');
//     const btn = document.querySelectorAll('.books');
//     btn.forEach((book) => {
//         if (book.id === title.textContent) {
//             book.remove();
//         }
//     })
//     myLibrary.forEach((obj) => {
//         if (obj.title === title.textContent) {
            
//             myLibrary.splice(deleteBook(), 1);
//         }
//     })
//     console.log(myLibrary);
//     bookContainer.classList.remove('show');
// });


// function deleteBook() {
//     const title = document.getElementById('book-title');
//     const index = myLibrary.findIndex(obj => obj.title === title.textContent);

//     return index
// }

// btn.foreach is dom manipulation
//mylibrary.foreach is for deleting the corresponding book from the array
//I will do something similar here