import { primaryLoad, planLoad } from './DOMfunctions'; 
import { planArray } from './plans-array.js';
import { extractPlans } from './local-storage.js';

export let storedArray = [];

document.addEventListener('DOMContentLoaded', () => {

    if (localStorage.getItem('plans') === null) {
        primaryLoad();
        return;
    } else {
        extractPlans();
        planLoad();
        primaryLoad();
    }
});
