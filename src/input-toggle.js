const planForm = document.querySelector('#plan-form-id');

function projectInputToggle() {
    planForm.classList.remove('plan-form-class');
    planForm.classList.add('visible');
} //ideally I can use this on both project and the task inputs both

export {planForm, projectInputToggle}