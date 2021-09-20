//const genderButton = document.getElementById('controls-down__gender');
//const genderList = document.getElementById('item-gender__signup');
const genderSelect = document.getElementById('item-gender__signup');
const genderElements = document.querySelectorAll('.section-gender__select');

//const dobSelect = document.getElementById('item-dob__signup');
const dobSelect = document.getElementById('controls-down__dob');

let ans = 'null';

/** EVENT HANDLERS */

// Click the gender down button - EVENTLISTENER
//genderButton.addEventListener('click', function() {
genderSelect.addEventListener('click', function() {  
  let buttonCheck = document.getElementById('link-gender').innerHTML.trim();
  let buttonValue = setButtonValue(buttonCheck);

  // Press Button, Select Gender
  /*
  let dropdownState = checkDropdownState();
  console.log(dropdownState);
  */

  checkDropdownState('gender', buttonValue);

  //changeDropdownButton('gender', buttonValue);      // Change the button icon
  //changeDropdownState('gender', buttonValue);       // Open/Close the dropdown menu

});

for (i of genderElements) {
  //console.log(genderElements);

  i.addEventListener('click', function() {
    let genderCap = null;
    let gender = null;

    gender = this.name;
    genderCap = gender.charAt(0).toUpperCase() + gender.slice(1);

    document.querySelector('.section-nav__span').innerHTML = genderCap;

  });

}

// Click the dob down button - EVENTLISTENER
//genderButton.addEventListener('click', function() {
dobSelect.addEventListener('click', function() {
  let buttonCheck = document.getElementById('link-dob').innerHTML.trim();
  let buttonValue = setButtonValue(buttonCheck);

  // Press Button, Select Gender
  /*
  let dropdownState = checkDropdownState();
  console.log(dropdownState);
  */

  checkDropdownState('dob', buttonValue);

  //changeDropdownButton('dob', buttonValue);      // Change the button icon
  //changeDropdownState('dob', buttonValue);       // Open/Close the dropdown menu

});


/** FUNCTIONS */

// Date Picker Setup
$(document).ready(function() {
  
  $("#select__dob").datepicker({
    changeYear: true,
    setDate: '-18y',
    maxDate: '-18y',
    yearRange: '-150:+0'
  });

  $("#select__dob").change(function() {
    //alert("YES SIR!!");

    let date = $(this);
    let selected = date.val();

    //console.log(selected);
    outputDOB(selected);

  });

});

/** Return the current value of the dropdown boxes
    Used for the gender and dob selectors on the signup */
function setButtonValue(buttonValue) {
  let str1 = buttonValue;
  let str2 = '<i class="fa fa-angle-down" id="down-chevron"></i>';

  let ans = str1.localeCompare(str2);       // Compare the two string values

  // "0" equal true
  if (ans == "0") {
    return "down";
  }

  return "up";

}


function checkDropdownState(dropdownValue, buttonValue) {
  let dropdown = dropdownValue;
  let button = buttonValue;
  
  //console.log("***** Checking Dropdown *****");
  //console.log("** Dropdown value  is " + dropdown);
  //console.log("** Button value  is " + button);
  //console.log("*          ***              *");

  /**
   * - if neither are open 
   *    - open current
   * - if the opposite is open 
   *    - close opposite
   *    - open current
   * 
   * - close
   */

  // Open - None are open
  if (button == 'down') {

    // Open - Opposite is open
    if ($('.section-gender').hasClass('collapsed__gender') || 
       ($('.section-dob').hasClass('collapsed__dob'))) {
      //alert("YES!! - INside");
        /**
        - close the opposite dropdown
        - change the opposite button values
      **/
      closeOppositeDropdown(dropdown);
      changeOppositeButton(dropdown, button);  

      /**   
        - open the current dropdown
        - change the current button values
      */
      openCurrentDropdown(dropdown);
      //changeCurrentButton(dropdown, button);  

      return; 

    }
    if (!$('.section-gender').hasClass('collapsed__gender') || 
       (!$('.section-dob').hasClass('collapsed__dob'))) {
      /**
        - open the current dropdown
        - change the current button
      */
      openCurrentDropdown(dropdown);
      changeCurrentButton(dropdown, button);

      return;

    }

  }

  // Close

  /**
    - close the current dropdown
		- change the current button
   */
  closeCurrentDropdown(dropdown);
  changeCurrentButton(dropdown, button);


}

//******************************************************* *//

function openCurrentDropdown(dropdownValue) {
  let dropdown = dropdownValue;

  console.log(dropdown);

  // Activate temporary settings 
  $('.section-nav').css('overflow', 'visible');

  if (dropdown == 'gender') {
		document.querySelector('.section-gender').classList.add('collapsed__gender');
		genderSetup.forEach(unhideVisibility);
		genderSetup.forEach(addActive);
		document.querySelector('.gender').classList.add('active');

		return;
	
	}
	
	document.querySelector('.section-dob').classList.add('collapsed__dob');
	dobSetup.forEach(unhideVisibility);
	dobSetup.forEach(addActive);
	document.querySelector('.dob').classList.add('active');

	return;
}

function closeCurrentDropdown(dropdownValue) {
  let dropdown = dropdownValue;
	
  // change if gender
  if (dropdown == 'gender') {
		document.querySelector('.section-gender').classList.remove('collapsed__gender');
		genderSetup.forEach(removeActive);
		document.querySelector('.gender').classList.remove('active');
  
		setTimeout(function() {
      // De-activate temporary settings
      $('.section-nav').css('overflow', 'hidden');

		  genderSetup.forEach(hideVisibility);

      return;
  
		}, 500);

	}

  // else dob
  //alert("No!!");
  document.querySelector('.section-dob').classList.remove('collapsed__dob');
  dobSetup.forEach(removeActive);
  document.querySelector('.dob').classList.remove('active');

  setTimeout(function() {
    // De-activate temporary settings
    $('.section-nav').css('overflow', 'hidden');

    dobSetup.forEach(hideVisibility);

    return;

  }, 500);

}

function closeOppositeDropdown(dropdownValue) {
	let dropdown = dropdownValue;
  
  //console.log(dropdown);
	
	if (dropdown == 'gender') {
		document.querySelector('.section-dob').classList.remove('collapsed__dob');
		dobSetup.forEach(removeActive);
		document.querySelector('.dob').classList.remove('active');
  
		setTimeout(function() {
  
      dobSetup.forEach(hideVisibility);
      
      return;
  
		}, 500);

	}

	// else dob
	document.querySelector('.section-gender').classList.remove('collapsed__gender');
	genderSetup.forEach(removeActive);
	document.querySelector('.gender').classList.remove('active');

	setTimeout(function() {

		genderSetup.forEach(hideVisibility);
		
		return;

	}, 500);
	
}

//******************************************************* *//
    
function changeCurrentButton(dropdownValue, buttonValue) {
  let dropdown = dropdownValue;
  let button = buttonValue;

  // open the dropdown
  if (button == 'down') {

    // Check for gender else dob 
    if (dropdown == 'gender') {
      document.getElementById('link-gender').innerHTML = '<i class="fa fa-angle-up" id="up-chevron"></i>';
      
      return;

    }

    // dob
    document.getElementById('link-dob').innerHTML = '<i class="fa fa-angle-up" id="up-chevron"></i>';
    
    return;
  
  }

  // close the dropdown
  setTimeout(function() {

    // Check for gender else dob 
    if (dropdown == 'gender') {
      document.getElementById('link-gender').innerHTML = '<i class="fa fa-angle-down" id="down-chevron"></i>';
      return;

    }

    document.getElementById('link-dob').innerHTML = '<i class="fa fa-angle-down" id="down-chevron"></i>';
    return;

  }, 250);

}

function changeOppositeButton(dropdownValue, buttonValue) {
  //alert("YES");
  let dropdown = dropdownValue;
  let button = buttonValue;

  /**
  console.log("***** Change Opposite Button *****");
  console.log("** Dropdown value  is " + dropdown);
  console.log("** Button value  is " + button);
  console.log("*          ***              *");
  */

  if (button == 'down') {
    //$('.section-nav').css('overflow', 'visible');

    // Check for gender, change opposite
	  // else change dob opposite
    setTimeout(function() {

      if (dropdown == 'gender') {

        document.getElementById('link-dob').innerHTML = '<i class="fa fa-angle-down" id="down-chevron"></i>';
        return;

      }

      
      document.getElementById('link-gender').innerHTML = '<i class="fa fa-angle-down" id="down-chevron"></i>';
      return;
    
    }, 250);

  }

   
  //alert("YES!!");
  // Time out to raise gender dropbox
  setTimeout(function() {
    //$('.section-nav').css('overflow', 'hidden');

    // Check for gender else dob 
    if (dropdown == 'gender') {
      document.getElementById('link-dob').innerHTML = '<i class="fa fa-angle-down" id="down-chevron"></i>';
      return;

    }

    document.getElementById('link-gender').innerHTML = '<i class="fa fa-angle-down" id="down-chevron"></i>';
    return;

  }, 250);

}
