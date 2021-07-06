/** VARIABLES */

// Hard Coded Arrays
let uncollapsedList = [];
let mobileCollapsedList = [];
let tabletCollapsedList = [];
let desktopCollapsedList = [];

/** Fixed Arrays */
let elementsList = [];
let elementsArray = [];

// Signup Arrays
let signupPageOne = [];
let signupPageTwo = [];

// Dropdown Arrays
let genderArray = [];
let genderSetup = [];

let dobArray = [];

/** FUNCTIONS */

function setHardcodedArrays() {

  uncollapsedList = ['mobile', 'tablet', 'desktop'];
  menuCollapsedList = ['mobile-collapsed__menu', 'tablet-collapsed__menu'];
  loginCollapsedList = ['mobile-collapsed__login', 'tablet-collapsed__login'];
  signupCollapsedList = ['mobile-collapsed__signup', 'tablet-collapsed__signup', 'desktop-collapsed__signup']; 

}

function setDisplayArray() {
  let elementsList = $('.section-nav').find('li');
  let elementsArray = [];

  for (var i=0; i < elementsList.length; i++) {
    
    if ((elementsList[i].className.includes('section-nav__item')) &&
        (!elementsList[i].className.includes('gender'))) {
      elementsArray.push(elementsList[i]);
    }

  }

  displayArray = elementsArray.filter(currentDisplay);
  
}

// Select the correct elements listed when withdrawing the menu
function setUncollapseArray() {
  let elementsList = $('.section-nav').find('li');
  let elementsArray = [];

  for (var i=0; i < elementsList.length; i++) {
    
    if (elementsList[i].className.includes('section-nav__item')) {
      elementsArray.push(elementsList[i]);
    }

  }

  // This must happen after 'active' is set !!!
  uncollapseArray = elementsArray.filter(currentNotDisplay);
  
}

function setSignupPages() {
  let elementsList = $('.section-nav').find('li');
  let elementsArray = [];
  let genderArray = [];

  for (var i=0; i < elementsList.length; i++) {
    
    // Gender is the dropdown box
    if ((elementsList[i].className.includes('section-nav__item signup')) &&
        (!(elementsList[i].className.includes('gender')))) {
      elementsArray.push(elementsList[i]);
    }

    // Make the dropdown arrays
    if ((elementsList[i].className.includes('gender'))) {
      genderArray.push(elementsList[i]);
    }

  }

  //console.log(elementsList);
  //console.log(genderArray);

  genderSetup = genderArray;

  signupPageOne = elementsArray.filter(pageOneSetup);
  signupPageTwo = elementsArray.filter(pageTwoSetup);

}

// Select the correct elements listed when withdrawing the menu
function setSignupArray() {
  let elementsList = $('.section-nav').find('li');
  let elementsArray = [];

  for (var i=0; i < elementsList.length; i++) {
    
    if (elementsList[i].className.includes('section-nav__item')) {
      elementsArray.push(elementsList[i]);
    }

  }

  // This must happen after 'active' is set !!!
  uncollapseArray = elementsArray.filter(signupArray);

}




