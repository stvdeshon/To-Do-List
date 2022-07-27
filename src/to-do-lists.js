/*This module is for creating new user projects on the To Do List*/

export default class Plan {
    constructor(title){
        this._title = title;
        this._toDoItems = [];
    }

    get title() {
        return this._title;
    }

    get toDoItems() {
        return this._toDoItems;
    }

    addToDoItems(item) {
        this.toDoItems.push(item);
    }

    removeToDoItems(item) {
        for(let i = 0; i < this.toDoItems.length; i++) {
            if(item === this.toDoItems[i].title) {
                this.toDoItems.splice(i, 1);
            }
        }

    }

}