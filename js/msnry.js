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


// msnry intialization, target the msnry grid in the html
const grid = document.querySelector('.msnry-grid')

// function to set the new settings of the msnry grid, using the css styling to set the sizes of each columnn, row and gap.
var msnry = new Masonry(grid, {
    columnWidth: '.msnry-grid-sizer',
    gutter: '.msnry-gutter-sizer',
    itemSelector: '.msnry-grid-item',
    percentPosition: true
})

// images loaded intializatiomn
imagesLoaded(grid).on('progress', function () {
    //layout our masonry grid after image loads
    msnry.layout()
}) 