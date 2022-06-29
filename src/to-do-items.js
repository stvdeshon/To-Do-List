/*This module is for creating new Do Do List items*/

export default class PlanItem {
    constructor(title, description, dueDate, priority) {
        this._title = title;
        this._description = description;
        this._priority = priority;
        this._dueDate = dueDate;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get description() {
        return this._description;
    }

    set description(value) {
        this._description = value;
    }

    get priority() {
        return this._priority;
    }

    set priority(value) {
        this._priority = value;
    }

    get dueDate() {
        return this._dueDate;
    }

    set dueDate(value) {
        this._dueDate = value;
    }
}

// Message to myself:
// So far, I only have getters and setters for the main values of the items however
// I may have to alter these as the project continues as I have added no extra
// functionality to the methods themselves. I also do not yet know how the date
// and priority mechanisms will ultimately function. I have created no other methods
// because unlike the projects themselves, the items should have no elements that
// would ever need to be entirely deleted or moved elsewhere.