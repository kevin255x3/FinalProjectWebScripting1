//  variables containing the html elements that open and close the menu, as well as the menu html element
const menuOpen = document.querySelector('.js-menu-open');
const menuClose = document.querySelector('.js-menu-close');
const menu = document.querySelector('.js-menu');

// // this event listener acts as the navigation menu toggle. so when the menu is clicked the navigation menu moves in and is displayed onto the screen. when you click it again, it moves the menu directed to a position that is hidden
menuOpen.addEventListener('click', () => {
    menu.classList.remove('-translate-y-full');
    menu.classList.add('translate-y-0');
});

menuClose.addEventListener('click', () => {
    menu.classList.remove('translate-y-0');
    menu.classList.add('-translate-y-full');
});