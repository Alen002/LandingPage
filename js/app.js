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
 * Purpose: Adds sections dynamically to the navigation bar
 * Create navbarItems from sections with the method createElement()
 * Add navbarItems to the navbar__list node with the method appendChild()
 * Use dataset for retrieving the data attributes of data-nav of each section with dataset.nav and add it to the navbarItems with innerHTML
 * Usage for navigation menu: createElement(), appendChild(), innerHTML, dataset for retrieving data attributes
 */
const section = document.querySelectorAll('section');

section.forEach((value) => {    
    const navbarItems = document.createElement('li');
    document.querySelector('#navbar__list').appendChild(navbarItems).innerHTML = value.dataset.nav;

    console.log(value.dataset.nav)
})

/**
 * Purpose: Highlight dynamically sections
 */

/** 
 * Check the coordinates of the section in the viewport with the method .getBoundingClientRect() for each section 
 * Retrieve the actual y and bottom coordinates of every section element via the scroll event listener
 * Calculate the actual height of each section with the formula height = coordinates.bottom - coordinates.y
 * If coordinates of an section reach an upper or lower viewport area then execute the classList method and add/remove the class 'your-active-class'
 * console.log is included to monitor the coordinates for each section
 * Usage for viewport functionality: getBoundingClientRect(),y, bottom, window.innerHeight
 */

window.addEventListener('scroll', () => {
    section.forEach ((value, index) => {
        
        let coordinates = document.querySelectorAll('section')[index].getBoundingClientRect();
        console.log(section[index].id + " " + coordinates.y);
        console.log(section[index].id + " " + coordinates.bottom);
        console.log(window.innerHeight);
        console.log(coordinates.bottom - coordinates.y);  
        
        let height = coordinates.bottom - coordinates.y

        if (coordinates.y > -(height/4) && coordinates.bottom < window.innerHeight + (height/4)) {
            document.querySelectorAll('section')[index].classList.add('your-active-class');
        } else {
            document.querySelectorAll('section')[index].classList.remove('your-active-class')
        }
    }); 
    
});






