const genderSelect = document.getElementById('controls-down__gender');
const genderElements = document.querySelectorAll('.section-gender__select');
const dobSelect = document.getElementById('controls-down__dob');

let ans = 'null';

/** EVENT HANDLERS */

// Click the gender down button - EVENTLISTENER
genderSelect.addEventListener('click', function() {  
  let buttonCheck = document.getElementById('link-gender').innerHTML.trim();
  let buttonValue = setButtonValue(buttonCheck);

  checkDropdownState('gender', buttonValue);

});

for (i of genderElements) {

  i.addEventListener('click', function() {
    let genderCap = null;
    let gender = null;

    gender = this.name;
    genderCap = gender.charAt(0).toUpperCase() + gender.slice(1);

    document.querySelector('.section-nav__span').innerHTML = genderCap;

  });

}

// Click the dob down button - EVENTLISTENER
dobSelect.addEventListener('click', function() {
  let buttonCheck = document.getElementById('link-dob').innerHTML.trim();
  let buttonValue = setButtonValue(buttonCheck);

  checkDropdownState('dob', buttonValue);

});


/** SET-UP FUNCTIONS */

// Date Picker Setup
$(document).ready(function() {
  
  $("#select__dob").datepicker({
    changeYear: true,
    setDate: '-18y',
    maxDate: '-18y',
    yearRange: '-150:+0'
  });

  $("#select__dob").change(function() {

    let date = $(this);
    let selected = date.val();

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

/** REGULAR FUNCTIONS */

function checkDropdownState(dropdownValue, buttonValue) {
  let dropdown = dropdownValue;
  let button = buttonValue;

  // Open - None are open
  if (button == 'down') {

    // Open - Opposite is open
    if ($('.section-gender').hasClass('collapsed__gender') || 
       ($('.section-dob').hasClass('collapsed__dob'))) {
      /**
        - close the opposite dropdown
        - change the opposite button values
      **/
      closeOppositeDropdown(dropdown, button); 

      /**   
        - open the current dropdown
        - change the current button values
      */
      openCurrentDropdown(dropdown, button);  

      return; 

    }
    if (!$('.section-gender').hasClass('collapsed__gender') || 
       (!$('.section-dob').hasClass('collapsed__dob'))) {
      /**
        - open the current dropdown
        - change the current button
      */
      openCurrentDropdown(dropdown, button);

      return;

    }

  }

  // Close
  /**
    - close the current dropdown
		- change the current button
   */
  closeCurrentDropdown(dropdown, button);

}

//**************************** DROPDOWN ****************************//

function openCurrentDropdown(dropdownValue, buttonValue) {
  let dropdown = dropdownValue;
  let button = buttonValue;

  // Activate temporary settings 
  $('.section-nav').css('overflow', 'visible');

  if (dropdown == 'gender') {
		document.querySelector('.section-gender').classList.add('collapsed__gender');
		genderSetup.forEach(unhideVisibility);
		genderSetup.forEach(addActive);
		document.querySelector('.gender').classList.add('active');

    // call the button changer here
    changeGenderButton(button);

		return;
	
	}
	
	document.querySelector('.section-dob').classList.add('collapsed__dob');
	dobSetup.forEach(unhideVisibility);
	dobSetup.forEach(addActive);
	document.querySelector('.dob').classList.add('active');

  // call the button changer here
  changeDOBButton(button);

	return;
}

function closeCurrentDropdown(dropdownValue, buttonValue) {
  let dropdown = dropdownValue;
  let button = buttonValue;
	
  // change if gender
  if (dropdown == 'gender') {

		document.querySelector('.section-gender').classList.remove('collapsed__gender');
		genderSetup.forEach(removeActive);
		document.querySelector('.gender').classList.remove('active');
  
		setTimeout(function() {
		  genderSetup.forEach(hideVisibility);

      // De-activate temporary settings
      $('.section-nav').css('overflow', 'hidden');
      // call the button changer here
      changeGenderButton(button);
  
		}, 500);

    return;

	}

  // else dob
  document.querySelector('.section-dob').classList.remove('collapsed__dob');
  dobSetup.forEach(removeActive);
  document.querySelector('.dob').classList.remove('active');

  setTimeout(function() {
    dobSetup.forEach(hideVisibility);

    // De-activate temporary settings
    $('.section-nav').css('overflow', 'hidden');
    // call the button changer here
    changeDOBButton(button);

  }, 500);

  return;

}

function closeOppositeDropdown(dropdownValue, buttonValue) {
	let dropdown = dropdownValue;
  let button = buttonValue;
	
	if (dropdown == 'gender') {
    dobSetup.forEach(removeActive);
		document.querySelector('.dob').classList.remove('active');
    document.querySelector('.section-dob').classList.remove('collapsed__dob');
  
		setTimeout(function() {
      dobSetup.forEach(hideVisibility);
      changeDOBButton('up');
  
		}, 500);

    return;

	}

	// else dob
  genderSetup.forEach(removeActive);
	document.querySelector('.gender').classList.remove('active');
  document.querySelector('.section-gender').classList.remove('collapsed__gender');

	setTimeout(function() {
		genderSetup.forEach(hideVisibility);
    changeGenderButton('up');

	}, 500);

  return;
	
}

//************************* BUTTON **************************//
    
function changeGenderButton(buttonValue) {
  let button = buttonValue;

  // icon had a down arrow, change to up
  if (button == 'down') {
    document.getElementById('link-gender').innerHTML = '<i class="fa fa-angle-up" id="up-chevron"></i>';

    return;
  }

  // icon had an up arrow, change to down
  document.getElementById('link-gender').innerHTML = '<i class="fa fa-angle-down" id="down-chevron"></i>';

  return;

}

function changeDOBButton(buttonValue) {
  let button = buttonValue;

  // icon had a down arrow, change to up
  if (button == 'down') {
    document.getElementById('link-dob').innerHTML = '<i class="fa fa-angle-up" id="up-chevron"></i>';

    return;
  }

  // icon had an up arrow, change to down
  document.getElementById('link-dob').innerHTML = '<i class="fa fa-angle-down" id="down-chevron"></i>';

  return;

}


