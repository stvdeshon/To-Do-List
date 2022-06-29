/*This module is for creating new user projects on the To Do List*/

export default class Plan {
    constructor(title){
        this._title = title;
        this._toDoItems = [];
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value
    }

    get toDoItems() {
        return this._toDoItems;
    }

    addToDoItems(item) {
        this.toDoItems.push(item);
    }

    removeToDoItems() {
        //remove an item from the array
    }
}

// Message to me later as to what I may change in this module:
// For now, this only sets a title and a list of constituent list items
// although I may change the addToDoItems parameter to use spread syntax
// if at some future point it proves necessary. This module has no DOM 
// methods but I should be able to use the getters and setters in other
// modules to that effect. There might be a need for an 'is complete'
// method either in this class or the to do item class to mark
// individual projects but that all remains to be seen.