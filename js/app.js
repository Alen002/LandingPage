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


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


/**
 * Adds dynamically sections to the navigation bar
 * 
 * 
 */
const section = document.querySelectorAll('section');


section.forEach((value) => {    
    const navbarItems = document.createElement('li');
    document.querySelector('#navbar__list').appendChild(navbarItems).innerHTML = value.dataset.nav;



    console.log(value.dataset.nav)
})

/**
 * Highlight dynamically sections
 */

/* Add and remove the class "your-active-class"  */
/* document.querySelectorAll('section')[0].classList.remove('your-active-class') */

/** 
 * Check the coordinates of the section in the viewport with the method .getBoundingClientRect() 
 * Retrieve the actual y coordinates of a section element via the scroll event 
 */

window.addEventListener('scroll', () => {
    section.forEach ((value, index) => {
        let coordinates = document.querySelectorAll('section')[index].getBoundingClientRect();
        console.log(section[index].id + " " + coordinates.y);

        if (coordinates.y < 10) {
            /* console.log(section[index].id + " " + coordinates.y); */
            document.querySelectorAll('section')[index].style.backgroundColor = 'red';
        } 
    });
});






