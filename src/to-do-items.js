/*This module is for creating new Do Do List items*/

import { format, parseISO } from "date-fns";

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

    get dueDate() {
        if (this._dueDate === '') {
            return 'No Date'; 
        } else {
            return format(parseISO(this._dueDate), 'LLL dd, yyyy');
        }
    }

}