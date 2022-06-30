export function createButton(index) {
    const btn = document.createElement('button');
    btn.classList.add('plans-list-items');
    btn.setAttribute('id', index); //originally const formattedTitle = `Title: ${title}`; from the library app
    btn.textContent = index;
    return btn;
}

export function deleteButton() {
    const title = document.getElementById('book-title');

    return lists.planArray.findIndex(obj => obj.title === title.textContent);

}