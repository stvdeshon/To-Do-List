export const inputToggle = {

    toggleOn: function (toggle) {
        toggle.classList.add('visible');
        toggle.classList.remove('invisible')
    },
    
    toggleOff: function (toggle) {
        toggle.classList.add('invisible');
        toggle.classList.remove('visible');
    }
};