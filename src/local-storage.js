import { planArray } from './plans-array.js';

export function storePlans() {
    localStorage.setItem('plans', JSON.stringify(planArray));
    console.log(localStorage.getItem('plans'));
}