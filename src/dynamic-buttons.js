export function createButton(title) {
    const btn = document.createElement('button');
    btn.classList.add('dynamic-buttons');
    btn.setAttribute('id', title);
    btn.textContent = title;
    return btn;
}

export function deleteButton() {
    const title = document.getElementById('book-title');

    return lists.planArray.findIndex(obj => obj.title === title.textContent);

}