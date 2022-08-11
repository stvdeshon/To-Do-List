import { primaryLoad, planLoad } from './DOMfunctions'; 
import { extractPlans } from './local-storage.js';

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
