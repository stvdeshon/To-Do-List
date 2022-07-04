export function createButton(title, elemClass) {
    const btn = document.createElement('button');
    btn.classList.add(`${elemClass}`);
    btn.setAttribute('id', title);
    btn.textContent = title;
    return btn;
}

export function btnDel(element, elemClass) {

    const button = document.querySelectorAll(`${elemClass}`);
    button.forEach((btn) => {
        if (element.classList.contains(btn.id)) {
        btn.remove();
        }
    });
}