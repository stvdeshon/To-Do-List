/*This module is for creating new Do Do List items*/

export default class PlanItem {
    constructor(parent, title, dueDate) {
        this._parent = parent;
        this._title = title;
        this._dueDate = dueDate;
    }

    get parent() {
        return this._parent;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get dueDate() {
        return this._dueDate;
    }

    set dueDate(value) {
        this._dueDate = value;
    }

}