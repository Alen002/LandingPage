/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const section = document.querySelectorAll('section');

/**
 * End Global Variables
 */ 

 /** Begin Main Functions
 * 
*/

/** Create navbarItems as anchors from sections with the method createElement()
 Retrieve the id of each section with value.id and store it into the variable id
 Add the section id to the anchor tag via setAttribute() method
 Add navbarItems to the navbar__list node with the method appendChild()
 Use dataset for retrieving the data attributes of data-nav of each section with dataset.nav and add it to the navbarItems with innerHTML
 */

let createNavbar = (value) => {
    const navbarItems = document.createElement('a');
        navbarItems.classList.add('menu__link')
        let id = "#" + value.id;
        navbarItems.setAttribute('href', id);
        document.querySelector('#navbar__list').appendChild(navbarItems).innerHTML = value.dataset.nav;
        console.log(value.dataset.nav)
};

section.forEach(createNavbar);

/** Listen for the scroll event initiated by the user with the scroll event listener
 * Retrieve the data for the y and bottom coordinates of each section with the method .getBoundingClientRect() 
 * Calculate the actual height of each section with the formula height = coordinates.bottom - coordinates.y
 * If coordinates of a section reach an upper or lower viewport area then execute the classList method and add/remove the class 'your-active-class'
 * console.log is included to monitor the coordinates of each section
 */

let focusSection = (index) => {
        
    let coordinates = document.querySelectorAll('section')[index].getBoundingClientRect();
    let height = coordinates.bottom - coordinates.y

    if (coordinates.y > -(height/4) && coordinates.bottom < window.innerHeight + (height/4)) {
        document.querySelectorAll('section')[index].classList.add('your-active-class');
    } else {
        document.querySelectorAll('section')[index].classList.remove('your-active-class')
    }
};

/**
 * End Main Functions
 */ 
 
 /** Begin Events
 * 
*/

window.addEventListener('scroll', () => {
    section.forEach (focusSection); 
});

/** End Events
 * 
*/






