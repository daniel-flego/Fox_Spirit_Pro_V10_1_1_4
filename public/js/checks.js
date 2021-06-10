/*************************** VARIABLES *******************************/

/** These below aren't being used */
const startingHeight = '60';                    // Header height - NOT IN USE
const tabletSize = '600';                       // Tablet Window Size
const desktopSize = '1000';                     // Desktop Size
/** Above */


/***************************** CHECKING *********************************/
/**
 * checkWindowSize()
 * checkCollapsedState()
 * checkToggleValue() - X
 * checkSignupValue() - X 
 * 
 */


/** Return Current Window Size Of The Screen 
    - the value of the section class is the same */
function checkWindowSize() {

  // Mobile Size
  if (window.innerWidth <= tabletSize) {
    return 'mobile';
  }
  // Tablet Size
  else if ((window.innerWidth > tabletSize) && (window.innerWidth <= desktopSize)) {
    return 'tablet';
  }
  // Desktop Size
  else if (window.innerWidth > desktopSize) {
     return 'desktop';
  }

  return 'Error - checkWindowSize() - Line 37';
}

/** Return The Value Of The Section State 
    - hard coded to return collapsed state value */
function checkCollapsedState() {
  
  if (compareUncollapsedList($(".section-nav"))) {
    return 'none';
  }

  //** Mobile */
  // this is the only way to get the class name
  else if ($('.section-nav').hasClass('mobile-collapsed__menu')) {
    return 'mobile-collapsed__menu';
  }
  else if ($('.section-nav').hasClass('mobile-collapsed__login')) {
    return 'mobile-collapsed__login';
  }
  else if ($('.section-nav').hasClass('mobile-collapsed__signup')) {
    return 'mobile-collapsed__signup';
  }
  
  //** Tablet */
  else if ($('.section-nav').hasClass('tablet-collapsed__menu')) {  
    return 'tablet-collapsed__menu';
  }
  else if ($('.section-nav').hasClass('tablet-collapsed__login')) {
    return 'tablet-collapsed__login';
  }
  else if ($('.section-nav').hasClass('tablet-collapsed__signup')) {
    return 'tablet-collapsed__signup';
  }

  //** Desktop */
  else if ($('.section-nav').hasClass('desktop-collapsed__signup')) {
    return 'desktop-collapsed__signup';
  }

  /** ERROR */
  else {
    console.log("ERROR - checkCollapsedState() - No Current 'section-nav' extension");
  }

}

/************ UTILITY FUNCTIONS ************/

/** Check the window size and collapsed state */
function checkBoth() {
  let windowSize = checkWindowSize();

  if (windowSize === 'mobile') {
    let currentCollapsed = checkCollapsedState();

    return currentCollapsed;
  }
  else if (windowSize === 'tablet') {
    let currentCollapsed = checkCollapsedState();

    return currentCollapsed;
  }
  else   if (windowSize === 'desktop') {
    let currentCollapsed = checkCollapsedState();

    return currentCollapsed;
  }
  /** ERROR!! */
  console.log("ERROR!! - checkBoth(), checks.js");

}

/** Check/Compare The Uncollapsed Section-Nav Extension  */
function compareUncollapsedList(value) {

  for (let i=0; i <= uncollapsedList.length; i++) {
    
    if (value.hasClass(uncollapsedList[i])) {
      return true;
    }

  }
  
}
