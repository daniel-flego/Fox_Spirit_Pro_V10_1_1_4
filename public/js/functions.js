/** VARIABLES */ 
// - for iterating signup page
var ctrl = $('.controls'),
        t = $('.total', ctrl).attr('data-total'),
        c = $('.current', ctrl),
        n = c.attr('data-current');         // Variables used for iterating page numbers

/** FUNCTIONS */

/** Set the extension on the section-nav class name
    - needed when first loading the web site and resizing */

function setSectionExtension() {
  let currentWindow = null; 

  currentWindow = checkWindowSize();
  document.querySelector('.section-nav').classList.add(currentWindow);

}

function setCollapsedState(currentWindowValue, currentButtonValue) {
  let currentWindow = currentWindowValue;
  let currentButton = currentButtonValue;
  let currentCollapsed = null;

  //console.log(currentWindow);
  //console.log(currentButton);

  if (currentWindow == 'mobile') {

    if (currentButton == 'item-toggle') {
      currentCollapsed = currentWindow + '-collapsed__menu';
    }
    /** NOT IN USE FOR NOW
    else if (menuToggleButton.id == 'item-login') {
      currentCollapsed = currentWindow + '-collapsed__login';
    }
    else if (menuToggleButton.id == 'item-signup') {
      currentCollapsed = currentWindow + '-collapsed__signup';
    }
    */

  }
  else if (currentWindow == 'tablet') {
    
    if (currentButton == 'item-toggle') {
      currentCollapsed = currentWindow + '-collapsed__menu';
    }
    else if (currentButton == 'item-login') {
      currentCollapsed = currentWindow + '-collapsed__login';
    }
    else if (currentButton == 'item-signup') {
      currentCollapsed = currentWindow + '-collapsed__signup';
    }

  }
  else if (currentWindow == 'desktop') {

    /** NOT IN USE FOR NOW
    if (currentButton == 'item-toggle') {
      currentCollapsed = currentWindow + '-collapsed__menu';
    }
    else if (currentButton == 'item-login') {
      currentCollapsed = currentWindow + '-collapsed__login';
    }
    */
    if (currentButton == 'item-signup') {
      currentCollapsed = currentWindow + '-collapsed__signup';
    }

  }
  else {
    console.log("Error!! - adding collapsed state");
  }

  return currentCollapsed;

}

/** Set the collapsed state on the section-nav class name
    - needed when web site and resizing */
    /*
function setCollapsedState() {
  let currentCollapsed = null; 

  currentCollapsed = checkCollapsedState();
  document.querySelector('.section-nav').classList.add(currentCollapsed);

}
*/

function setMenuToggle() {
  document.getElementById('link-toggle').innerHTML = '<i class="fa fa-bars"></i>';

}

/** Toggle the login info status div visible or not */
function toggleLoginInfo(value) {
  let state = value;

  if (state === 'none') {
    $(".info").toggle();
    
    setTimeout(function() {
      $(".login-status").display = "none";

    }, 500);

  }
  else {
    // clear the collapsed section
    $(".info").toggle(1000);

  }
  
}

//** Changes The Value Of The Menu Toggle Button **/
function changeToggleValue(currentToggleValue) {
  let currentToggle = currentToggleValue;

  if (currentToggle === '<i class="fa fa-bars"></i>') {
    document.getElementById('link-toggle').innerHTML = '<i class="fa fa-times"></i>';
    //return '<i class="fa fa-times"></i>';
  }
  else if (currentToggle === '<i class="fa fa-times"></i>') {
    document.getElementById('link-toggle').innerHTML = '<i class="fa fa-bars"></i>';
    //return '<i class="fa fa-bars"></i>';
  }
  else {
    console.log("Error!! - changeToggleValue() function");
  } 

}

/** Find The Current Display Array */
function currentDisplay(value) {

  if (window.getComputedStyle(value).getPropertyValue('display') !== 'none') {
    return value;

  }

}

// Find the array of currently not displayed elements
// Make sure this happens after 'active is set' !!!!!
function currentNotDisplay(value) {

  if (!value.classList.contains('active')) {
    return value;

  }

}

// Find the array of signup elements
function signupArray(value) {

  if (value.classList.contains('signup')) {
    return value;

  }

}

// Add 'active' to each element in the array passed
function addActive(value) {
  value.classList.add('active');

}

// Remove 'active' from each element in the array passed
function removeActive(value) {
  value.classList.remove('active');

}

/** Hide each element from the array passed */
function hideVisibility(element) {
  
  if ((typeof element !== 'undefined')) {
    element.style.visibility = 'hidden';
    element.style.display = 'none';
  }

}

/** Unhide each element from the array passed */
function unhideVisibility(element) {
  element.style.visibility = null;
  element.style.display = null;
}

/** Hide each element from the array passed */
function switchVisibility(element) {
  
  if ((typeof element !== 'undefined')) {
    element.style.visibility = 'hidden';
    //element.style.display = 'none';
  }

}

// Setup the first signup page
function pageOneSetup(value, index) {

  if ((index >= '0') && (index <= '7')) {
    //console.log(value);
    return value;
    
  }

}

// Setup the second signup page
function pageTwoSetup(value, index) {

  if ((index >= '8') && (index <= '11')) {
    return value;

  }

}

/** Changing Page Interations */

/** Clicking the next link
 *  - changing the numbers
 *  - activating the link morph 
 */
function nextIteration() {  
  //e.preventDefault();
  ctrl.removeClass('noPrev');
  n++;
  (n + 1 >= t) ? (n = t, ctrl.addClass('morph')) : n++;

  c.attr('data-current', n).html(n);

}

/** Clicking the previous link
 *  - changing the numbers
 *  - activating the link morph 
 */
function prevIteration() {
  //e.preventDefault();
  ctrl.removeClass('morph');
  (n - 1 <= 1) ? (n = 1, ctrl.addClass('noPrev') ) : n-- ;
  c.attr('data-current', n).html(n);

}

function collapsedResizeProcedure(removeValue, addValue) {
  let remove = removeValue;
  let add = addValue;
  
  // remove the current section-nav class extension
  document.querySelector('.section-nav').classList.remove(remove);
  // add the new section-nav class extension
  document.querySelector('.section-nav').classList.add(add);

}
