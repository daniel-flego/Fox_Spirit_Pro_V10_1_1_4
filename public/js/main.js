/*************************** VARIABLES *******************************/

const menuToggleButton = document.getElementById('item-toggle');
const loginButton = document.getElementById('item-login');
const signupButton = document.getElementById('item-signup');
const nextButton = document.getElementById('controls-right');
const prevButton = document.getElementById('controls-left');

let currentWindow = 'Error';        // Current window size 
let currentCollapsed = 'None';      // Current section state  
let currentButton = 'None'

/** Menu Toggle Button - All The Processes When The Menu Button Is Pressed */
menuToggleButton.addEventListener('click', function() {
  let currentWindow = checkWindowSize();                // Get current window size
  let currentButton = menuToggleButton.id;              // Assign button id to variable

  // Check if main menu has collapsed
  if (compareUncollapsedList($(".section-nav"))) {
    currentCollapsed = setCollapsedState(currentWindow, currentButton);

    openMainMenu('yes', currentWindow, currentCollapsed);                     // Open main menu
  }
  else if (!compareUncollapsedList($(".section-nav"))) {

    if ((typeof currentCollapsed !== 'undefined')) {
      currentCollapsed = checkCollapsedState();

      /** Mobile */
      if (currentCollapsed.includes('mobile')) {

        if (currentCollapsed.includes('collapsed__menu')) {   
          closeMainMenu('yes', currentWindow, currentCollapsed);              // Close main menu
        }
        else if (currentCollapsed.includes('collapsed__login') ||
                (currentCollapsed.includes('collapsed__signup'))) {   

          closeLoginMenu('no', currentWindow, currentCollapsed);              // Close login menu
          setTimeout(function() {
            openMainMenu('no', currentWindow, 'mobile-collapsed__menu');      // Open the main menu
          }, 500);   
        }
        /** Mobile Error */
        else {
          console.log("Error - menu resize collapsed mobile");
        }

      }
      /** Tablet */
      else if (currentCollapsed.includes('tablet')) {

        if (currentCollapsed.includes('collapsed__menu')) {
          closeMainMenu('yes', currentWindow, currentCollapsed);              // Close the main menu
        }
        else if (currentCollapsed.includes('collapsed__login') ||
                (currentCollapsed.includes('collapsed__signup'))) {
          closeLoginMenu('yes', currentWindow, currentCollapsed);             // Close the login menu

          setTimeout(function() {
            document.querySelector('.section-nav').classList.add(currentWindow);
    
          }, 500);
        }
        /** Tablet Error */
        else {
          console.log("Error - menu resize collapsed tablet");
        }

      }
      /** Desktop */
      else if (currentCollapsed.includes('desktop')) {
        closeSignupMenu('yes', currentWindow, currentCollapsed);              // Close signup menu

        setTimeout(function() {      
          document.querySelector('.section-nav').classList.add(currentWindow);
  
        }, 500);
      }
      /** Desktop Error */
      else {
        console.log("ERROR!! - menu resize collapsed desktop");
      }

    }
    /** Error 'undefined' todo */
    
  }
  /** MENU ERROR */
  else {
    console.log("ERROR!! - menu 'item-toggle' eventlistener");
  }
  
});

/** Login Button - All The Processes When The Login Button Is Pressed */
loginButton.addEventListener('click', function() {
  let currentWindow = checkWindowSize();                // Get current window size
  let currentButton = loginButton.id;              // Assign button id to variable

  // Check if main menu has collapsed
  if (compareUncollapsedList($(".section-nav"))) {
    currentCollapsed = setCollapsedState(currentWindow, currentButton);

    openMainMenu('yes', currentWindow, currentCollapsed);                       // Open main menu
  }
  else if (!compareUncollapsedList($(".section-nav"))) {

    if ((typeof currentCollapsed !== 'undefined')) {
      currentCollapsed = checkCollapsedState();

      /** Mobile */
      if (currentCollapsed.includes('mobile')) {

        if (currentCollapsed.includes('collapsed__menu')) {
          closeMainMenu('no', currentWindow, currentCollapsed);                 // Close main menu
          
          setTimeout(function() {
            openLoginMenu('no', currentWindow, 'mobile-collapsed__login');      // Open the login menu
    
          }, 500);
    
        }
        /** Mobile Error */
        else {
          console.log("ERROR!! - login resize collapsed mobile");
        }

      }
      /** Tablet */
      else if (currentCollapsed.includes('tablet')) {

        if (currentCollapsed.includes('collapsed__menu')) {
          closeMainMenu('no', currentWindow, currentCollapsed);                 // Close the main menu
    
          setTimeout(function() {
            openLoginMenu('no', currentWindow, 'tablet-collapsed__login');      // Open the login menu

          }, 500);

        }
        /** Tablet Error */
        else {
          console.log("ERROR!! - login resize collapsed tablet");
        }

      }

    }
    /** Error 'undefined' todo */
  
  }
  /** Mobile Error */
  else {
    console.log("ERROR!! - login 'login-button' eventlistener");
  }

});

/** Signup Button - All The Processes When The Signup Button Is Pressed */
signupButton.addEventListener('click', function() {
  let currentWindow = checkWindowSize();                // Get current window size
  let currentButton = signupButton.id;              // Assign button id to variable

  // Check if main menu has collapsed
  if (compareUncollapsedList($(".section-nav"))) {
    currentCollapsed = setCollapsedState(currentWindow, currentButton);

    console.log(currentCollapsed);

    if (currentWindow.includes('mobile')) {
      openMainMenu('yes', currentWindow, currentCollapsed);                           // Open main menu
    }
    else {
      openSignupPageOne('yes', currentWindow, currentCollapsed);                      // Open the signup menu
    }
    
  }
  else if (!compareUncollapsedList($(".section-nav"))) {

    if ((typeof currentCollapsed !== 'undefined')) {
      currentCollapsed = checkCollapsedState();

      /** Mobile */
      if (currentCollapsed.includes('mobile')) {

        if (currentCollapsed.includes('mobile-collapsed__menu')) {
          closeMainMenu('no', currentWindow, currentCollapsed);                     // Close the main menu

          setTimeout(function() {
            openSignupPageOne('no', currentWindow, 'mobile-collapsed__signup');     // Open the signup menu

          }, 500);

        }
        /** Error Mobile */
        else {
          console.log("ERROR!! - signup resize collapsed mobile");
        }

      }
      /** Tablet */
      else if (currentCollapsed.includes('tablet')) {

        if (currentCollapsed.includes('tablet-collapsed__menu')) {
          closeMainMenu('no', currentWindow, currentCollapsed);                     // Close the main menu

          setTimeout(function() {
            openSignupPageOne('no', currentWindow, 'tablet-collapsed__signup');     // Open the signup menu

          }, 500);

        }
        /** Tablet Error */
        else {
          console.log("ERROR!! - signup resize collapsed tablet");
        }

      }
      /** Desktop */
      else if (currentCollapsed.includes('desktop')) {

        if (currentCollapsed.includes('tablet-collapsed__menu')) {

        }
        /** Tablet Error */
        else {
          console.log("ERROR!! - signup resize collapsed desktop");
        }

      }
      /** Error */
      else {
        console.log("ERROR - signup 'signup-button' eventlistener");
      }


    }
    /** Error 'undefined' */

  }

});

/********** SIGNUP EVENT LISTENERS **********/

/** Next button press */
nextButton.addEventListener('click', function() {
  let currentWindow = checkWindowSize();               // Get current window size
  let currentCollapsed = checkCollapsedState();        // Get current section state

  closeSignupMenu('no', currentWindow, currentCollapsed);     // Close signuo menu

  setTimeout(function() {
    openSignupPageTwo('no', currentWindow, currentCollapsed);     // Open signup page 2
  
  }, 500);
  
});

prevButton.addEventListener('click', function() {
  let currentWindow = checkWindowSize();                // Get current window size
  let currentCollapsed = checkCollapsedState();         // Get current section state

  closeSignupMenu('no', currentWindow, currentCollapsed);     // Close signup menu

  setTimeout(function() {
    openSignupPageOne('no', currentWindow, currentCollapsed);     // Open signup page 1
  
  }, 500);

});


/********** UTILITIES **********/


/** Check The Resizing Of The Uncollapsed Navigation Bar */
$(window).resize(function() {
  let currentCollapsed = checkBoth();

  if (compareUncollapsedList($(".section-nav"))) {
    resizeUncollapsed();
  }
  else if (!compareUncollapsedList($(".section-nav"))) {

    if ((typeof currentCollapsed !== 'undefined')) {

      if (currentCollapsed.includes('collapsed__menu')) {   
        resizeCollapsedMenu();
      }
      else if (currentCollapsed.includes('collapsed__login')) {   
        resizeCollapsedLogin();
      }
      else if (currentCollapsed.includes('collapsed__signup')) {   
        resizeCollapsedSignup();
      }
      /** Error */
      else {
        console.log("Error - resize collapsed");
      }

    }

  }
  /** Error */
  else {
    console.log("Error - resize uncollapsed");
  }

});

function resizeUncollapsed() {
/** resizeNav() */
 let currentWindow = checkWindowSize();                // Get current window size
 let currentCollapsed = checkCollapsedState();         // Get current section state  

 if (currentCollapsed === 'none') {
   
   if (currentWindow === 'mobile') {

    /** Mobile Size - Doesn't Happen */
    if ($(".section-nav").hasClass('mobile')) {
      //console.log("Mobile");
    }
    /** resizing from tablet to mobile size */
    else if ($(".section-nav").hasClass('tablet')) { 
      resizeNav('tablet');
    }
    /** Desktop Size */
    else if ($(".section-nav").hasClass('desktop')) {
      resizeNav('desktop');
    }
    /** Error */
    else {
      console.log("Error - resize 1, the uncollapsed nav bar - mobile");
    }

   }
   else if (currentWindow === 'tablet') {

    /** resizing from mobile to tablet size */
    if ($(".section-nav").hasClass('mobile')) {
      resizeNav('mobile');
    }
    /** resizing from desktop to tablet size */
    else if ($(".section-nav").hasClass('desktop')) {
      resizeNav('desktop');
    }
    /** Tablet Size - Doesn't Happen */
    else if ($(".section-nav").hasClass('tablet')) {
      //console.log("Tablet");
    }
    /** Error */
    else {
      console.log("Error - resize 1, the uncollapsed nav bar - tablet");
    }

   }
   else if (currentWindow === 'desktop') {

    /** resizing to mobile */
    if ($(".section-nav").hasClass('mobile')) {
      resizeNav('mobile');
    }
    /** resizing to tablet*/
    else if ($(".section-nav").hasClass('tablet')) {
      resizeNav('tablet');
    }
    /** resizing back to desktop */
    else if ($(".section-nav").hasClass('desktop')) {
      //console.log("Desktop");
    }
    /** Error Size */
    else {
      console.log("Error - resize 1, the uncollapsed nav bar - desktop");
    }

   }

  }

}

function resizeCollapsedMenu() {
  let currentCollapsed = checkCollapsedState();         // Get current section state

  if (currentCollapsed === 'mobile-collapsed__menu') {
    resizeMenu(currentCollapsed);

  }
  else if (currentCollapsed === 'tablet-collapsed__menu') {
    resizeMenu(currentCollapsed);

  }
  else if (currentCollapsed === 'desktop-collapsed__menu') {
    /** This one needs to disappear */
  }
  /** ERROR! */
  else {
    console.log("ERROR - resizeCollapsedMenu() event, main.js");
  }

}

function resizeCollapsedLogin() {
  let currentCollapsed = checkCollapsedState();         // Get current section state

  if (currentCollapsed === 'mobile-collapsed__login') {
    resizeLogin(currentCollapsed);
  }
  else if (currentCollapsed === 'tablet-collapsed__login') {
    resizeLogin(currentCollapsed);
  }
  else if (currentCollapsed === 'desktop-collapsed__login') {
    /** This one needs to disappear */
  }
  /** ERROR! */
  else {
    console.log("ERROR - resizeCollapsedLogin() event, main.js");
  }
  
}

function resizeCollapsedSignup() {
  let currentCollapsed = checkCollapsedState();         // Get current section state

  if (currentCollapsed === 'mobile-collapsed__signup') {
    resizeSignup(currentCollapsed);
  }
  else if (currentCollapsed === 'tablet-collapsed__signup') {
    resizeSignup(currentCollapsed);
  }
  else if (currentCollapsed === 'desktop-collapsed__signup') {
    resizeSignup(currentCollapsed);
  }
  /** ERROR! */
  else {
    console.log("ERROR - resizeCollapsedSignup() event, main.js");
  }

}
