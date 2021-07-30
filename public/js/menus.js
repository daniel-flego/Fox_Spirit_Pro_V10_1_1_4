/** Calling functions in order to make changes occur */

/** Variable Arrays */
let displayArray = [];          // array to hold the current list of visible elements
let uncollapseArray = [];       // array to hold the current list of not visible elements
let currentToggle = null;       // current value of the menu toggle
let loginInfo = 'none';         // To show login info or not

// Open the main toggle menu
function openMainMenu(loginInfoValue, sectionStateValue, extensionValue) {
  let loginInfo = loginInfoValue;
  let sectionState = sectionStateValue;
  let extension = extensionValue;
  // the current value of the menu toggle icon 
  let currentToggle = document.getElementById('link-toggle').innerHTML;
  //console.log(currentToggle);

  // toggle the login info status - remove
  if (loginInfo === 'yes') {
    toggleLoginInfo('none');

  }
  
  // remove current section state from the section-nav parent class name
  document.querySelector('.section-nav').classList.remove(sectionState);

  // add the menu extension to section-nav parent
  document.querySelector('.section-nav').classList.add(extension);

  /** These need to happen at the same time to keep the nav elements still 
      - Change toggle
      - Change active
  */
  //console.log(currentToggle);
  changeToggleValue(currentToggle);
  setDisplayArray(displayArray);          // Get the list of current display
  
  //console.log(displayArray);
  displayArray.forEach(addActive);        // Add 'active' to the classnames

}

function closeMainMenu(loginInfoValue, sectionStateValue, extensionValue) {
  let loginInfo = loginInfoValue;
  let sectionState = sectionStateValue;
  let extension = extensionValue;
  // the current value of the menu toggle icon 
  let currentToggle = document.getElementById('link-toggle').innerHTML;

  // prepare elements list for withdrawing the login menu
  // This must happen after 'active' is set !!!
  setUncollapseArray(uncollapseArray);
  uncollapseArray.forEach(hideVisibility);

  // remove the menu extension from section-nav parent 
  document.querySelector('.section-nav').classList.remove(extension);

  setTimeout(function() {
    // add section state to the section-nav parent class name
    document.querySelector('.section-nav').classList.add(sectionState);
    
    // toggle the login info status - add
    if (loginInfo === 'yes') {
      toggleLoginInfo('collapsed');

    }

    /** These need to happen at the same time to keep the nav elements still 
        - Change toggle
        - Change active
    */
    //console.log(currentToggle);
    changeToggleValue(currentToggle);        // change the value of the menu toggle
    displayArray.forEach(removeActive);         // remove 'active' from the classname
    uncollapseArray.forEach(unhideVisibility);  // show hidden elements

  }, 500);

}

// Opens both login and signup pages
function openLoginMenu(loginInfoValue, sectionStateValue, extensionValue) {
  let loginInfo = loginInfoValue;
  let sectionState = sectionStateValue;
  let extension = extensionValue;
  // the current value of the menu toggle icon 
  let currentToggle = document.getElementById('link-toggle').innerHTML;
  
  // remove the login info status
  if (loginInfo === 'yes') {
    toggleLoginInfo('collapsed');          
  }

  // remove current section state from the section-nav parent class name
  document.querySelector('.section-nav').classList.remove(sectionState);

  // add the menu extension to section-nav parent
  document.querySelector('.section-nav').classList.add(extension); 

  /** These need to happen at the same time to keep the nav elements still 
    - Change toggle
    - Change active
  */
  changeToggleValue(currentToggle);       // Change the value of the menu toggle
  setDisplayArray(displayArray);          // Get the list of current display 
  displayArray.forEach(addActive);        // Add 'active' to the classnames

}

// Closes both login and signup pages
function closeLoginMenu(loginInfoValue, sectionStateValue, extensionValue) {
  let loginInfo = loginInfoValue;
  let sectionState = sectionStateValue;
  let extension = extensionValue;
  // the current value of the menu toggle icon 
  let currentToggle = document.getElementById('link-toggle').innerHTML;
  
  //alert('YES$%');

  // remove the login info status
  if (loginInfo === 'yes') {
    toggleLoginInfo('collapsed');          
  }

  // prepare elements list for withdrawing the login menu
  // This must happen after 'active' is set !!!
  setUncollapseArray(uncollapseArray);
  uncollapseArray.forEach(hideVisibility);

  // remove the menu extension to section-nav parent
  document.querySelector('.section-nav').classList.remove(extension);

  setTimeout (function() {
    /** These need to happen at the same time to keep the nav elements still 
        - Change toggle
        - Change active
    */
    changeToggleValue(currentToggle);       // Change the value of the menu toggle
    displayArray.forEach(removeActive);     // remove 'active' from the class names
    uncollapseArray.forEach(unhideVisibility);

  }, 500)

}


function closeSignupMenu(loginInfoValue, sectionStateValue, extensionValue) {
  let loginInfo = loginInfoValue;
  let sectionState = sectionStateValue;
  let extension = extensionValue;
  // the current value of the menu toggle icon 
  let currentToggle = document.getElementById('link-toggle').innerHTML;
  // item-toggle needs to disappear on the uncollapse
  let itemToggle = document.querySelector('#item-toggle');

  // remove the login info status
  if (loginInfo === 'yes') {
    toggleLoginInfo('collapsed');          
  }
//alert("YES");
  // remove the menu extension to section-nav parent
  document.querySelector('.section-nav').classList.remove(extension);

  // prepare elements list for withdrawing the login menu
  // This must happen after 'active' is set !!!
  setUncollapseArray(uncollapseArray);
  uncollapseArray.forEach(hideVisibility);

  // bc of the way the menu toggle moves around in desktop state
  //console.log(sectionState);
  if (sectionState === 'desktop') {
    hideVisibility(itemToggle);

  }

  setTimeout (function() {
    /** These need to happen at the same time to keep the nav elements still 
        - Change toggle
        - Change active
    */
    changeToggleValue(currentToggle);       // Change the value of the menu toggle
    displayArray.forEach(removeActive);     // remove 'active' from the class names
    uncollapseArray.forEach(unhideVisibility);

    // revert back to normal, see line 162
    if (sectionState === 'desktop') {
      unhideVisibility(itemToggle);

    }

  }, 500);
}

function openSignupPageOne(loginInfoValue, sectionStateValue, extensionValue) {
  let loginInfo = loginInfoValue;
  let sectionState = sectionStateValue;
  let extension = extensionValue;
  // the current value of the menu toggle icon 
  let currentToggle = document.getElementById('link-toggle').innerHTML;
  //alert("YES!!");

  // remove the login info status
  if (loginInfo === 'yes') {
    //alert("YES!!3");
    toggleLoginInfo('none');         
  }

  //toggleLoginInfo(loginInfo); 
  
  // remove current section state from the section-nav parent class name
  document.querySelector('.section-nav').classList.remove(sectionState);

  prevIteration();        // Update the previous iteration link
  
  // Call to prev page, making correct elements show and active
  //console.log(signupPageTwo);
  signupPageTwo.forEach(hideVisibility);
  signupPageTwo.forEach(removeActive);

  // Set up an array for the gender dropdown and   it's list elements
  //console.log(genderSetup);
  genderSetup.forEach(hideVisibility);
  genderSetup.forEach(removeActive);

  signupPageOne.forEach(unhideVisibility);
  signupPageOne.forEach(addActive);

  // add extension to section-nav parent class name
  document.querySelector('.section-nav').classList.add(extension);

  /** These need to happen at the same time to keep the nav elements still 
      - Change toggle
      - Change active
  */
  changeToggleValue(currentToggle);       // Change the value of the menu toggle
  setDisplayArray(displayArray);          // Get the list of current display 
  displayArray.forEach(addActive);        // Add 'active' to the classnames

}

function openSignupPageTwo(loginInfoValue, sectionStateValue, extensionValue) {
  let loginInfo = loginInfoValue;
  let sectionState = sectionStateValue;
  let extension = extensionValue;
  // the current value of the menu toggle icon 
  let currentToggle = document.getElementById('link-toggle').innerHTML;

  // remove the login info status
  if (loginInfo === 'yes') {
    toggleLoginInfo('collapsed');          
  }
  
  nextIteration();              // Call function for next iteration process

  // Call to next page
  signupPageOne.forEach(hideVisibility);
  signupPageOne.forEach(removeActive);
  
  signupPageTwo.forEach(unhideVisibility);
  signupPageTwo.forEach(addActive);

  // add extension to parent class name
  document.querySelector('.section-nav').classList.add(extension);

  /** These need to happen at the same time to keep the elements still 
      - Change toggle
      - Change active
  */
  changeToggleValue(currentToggle);       // Change the value of the menu toggle
  setDisplayArray(displayArray);          // Get the list of current display 
  displayArray.forEach(addActive);        // Add 'active' to the classnames

}

function resizeNav(removeValue) {
  let remove = removeValue;
  
  //console.log("YES!!- uncollapsedResize");
  // remove the current section-nav class extension
  document.querySelector('.section-nav').classList.remove(remove);
  setSectionExtension();      // add the class extension

}

function resizeMenu(collapsedStateValue) {
  let currentWindow = checkWindowSize();
  // not used for the resize to desktop
  let addCollapseState = currentWindow + '-collapsed__menu';
  let removeCollapseState = collapsedStateValue;

  if (currentWindow === 'mobile') {

    /** moving from the current window(tablet) size to mobile 
      - from tablet to mobile is the only possibility */
    if ($(".section-nav").hasClass('tablet-collapsed__menu')) {
      collapsedResizeProcedure(removeCollapseState, addCollapseState);
    }
    /** Error */
    else {
      console.log("Error - resizeMenu(...) mobile");
    }
  
  }
  else if (currentWindow === 'tablet') {

    /** moving from the current window(tablet) size to mobile 
        - from tablet to mobile is the only possibility */
    if ($(".section-nav").hasClass('mobile-collapsed__menu')) {
      collapsedResizeProcedure(removeCollapseState, addCollapseState);
    }
    /** Error */
    else {
      console.log("Error - resizeMenu(...) tablet");
    }

  }
  else if (currentWindow === 'desktop') {
    
    // The variables declared above are not used here
    closeLoginDesktop('yes', 'desktop', 'tablet-collapsed__menu');

  }
  /** Error */
  else {
    console.log("Error - resizeMenu(...)");
  }

}
  
function resizeLogin(collapsedStateValue) {
  let currentWindow = checkWindowSize();
  // not used for the resize to desktop
  let addCollapseState = currentWindow + '-collapsed__login';
  let removeCollapseState = collapsedStateValue;

  if (currentWindow === 'mobile') {

    /** moving from the current window(tablet) size to mobile 
    - from tablet to mobile is the only possibility */
    if ($(".section-nav").hasClass('tablet-collapsed__login')) {

      collapsedResizeProcedure(removeCollapseState, addCollapseState);

    }
    /** Error */
    else {
      console.log("Error - resizeLogin(...) menu");
    }

  }
  else if (currentWindow === 'tablet') {

    /** moving from the current window(tablet) size to mobile 
        - from tablet to mobile is the only possibility */
    if ($(".section-nav").hasClass('mobile-collapsed__login')) {

      collapsedResizeProcedure(removeCollapseState, addCollapseState);

    }
    /** Error */
    else {
      console.log("Error - resizeLogin(...) tablet");
    }

  }
  else if (currentWindow === 'desktop') {
    /** Needs to be created */

    /** moving from the current window(tablet) size to desktop 
    - from tablet to desktop is the only possibility */
    if ($(".section-nav").hasClass('tablet-collapsed__login')) {
      
      // The variables declared above are not used here
      closeLoginDesktop('yes', 'desktop', 'tablet-collapsed__login');

    }
    /** Error */
    else {
      console.log("Error - resizeLogin(...) menu");
    }

  }
  /** Error */
  else {
    console.log("Error - resizeLogin(...)");
  }

}

function resizeSignup(collapsedStateValue) {
  let currentWindow = checkWindowSize();
  let addCollapseState = currentWindow + '-collapsed__signup';
  let removeCollapseState = collapsedStateValue;

  //console.log("remove this " + removeCollapseState);
  //console.log("add this " + addCollapseState);

  if (currentWindow === 'mobile') {

    /** moving from the current window(tablet) size to mobile 
    - from tablet to mobile is the only possibility */
    if ($(".section-nav").hasClass('tablet-collapsed__signup')) {

      collapsedResizeProcedure(removeCollapseState, addCollapseState);

    }
    /** Error */
    else {
      console.log("Error - resizeSignup(...) mobile");
    }

  }
  else if (currentWindow === 'tablet') {

    /** moving from the current window(mobile) size to tablet 
        - from mobile to tablet is the only possibility */
    if ($(".section-nav").hasClass('mobile-collapsed__signup')) {

      collapsedResizeProcedure(removeCollapseState, addCollapseState);

    }
    else if ($(".section-nav").hasClass('desktop-collapsed__signup')) {

      collapsedResizeProcedure(removeCollapseState, addCollapseState);

    }
    /** Error */
    else {
      console.log("Error - resizeSignup(...) tablet");
    }

  }
  else if (currentWindow === 'desktop') {
    
    /** moving from the current window(desktop) size to tablet 
    - from tablet to desktop is the only possibility */
    if ($(".section-nav").hasClass('tablet-collapsed__signup')) {

      collapsedResizeProcedure(removeCollapseState, addCollapseState);

    }
    /** Error */
    else {
      console.log("Error - resizeSignup(...) desktop");
    }

  }
  /** Error */
  else {
    console.log("Error - resizeSignup(...)");
  }

}

function closeLoginDesktop(loginInfoValue, sectionStateValue, extensionValue) {
  let loginInfo = loginInfoValue;
  let sectionState = sectionStateValue;
  let extension = extensionValue;
  // the current value of the menu toggle icon 
  let currentToggle = document.getElementById('link-toggle').innerHTML;

  // remove the login info status
  if (loginInfo === 'yes') {
    toggleLoginInfo('collapsed');          
  }

  // remove the menu extension to section-nav parent
  document.querySelector('.section-nav').classList.remove(extension);

  // prepare elements list for withdrawing the login menu
  // This must happen after 'active' is set !!!
  //setUncollapseArray(uncollapseArray);
  //uncollapseArray.forEach(hideVisibility);

  /**
    Make the elements in the current collapsed menu invisible 
  */
  setSignupArray(uncollapseArray);
  //console.log(uncollapseArray);
  uncollapseArray.forEach(switchVisibility);
  
  setTimeout(function () {

    // add the menu extension to section-nav parent
    document.querySelector('.section-nav').classList.add(sectionState);

    changeToggleValue(currentToggle);       // Change the value of the menu toggle
    displayArray.forEach(removeActive);     // remove 'active' from the class names
    uncollapseArray.forEach(unhideVisibility);

  }, 500);

}
