//const genderButton = document.getElementById('controls-down__gender');
//const genderList = document.getElementById('item-gender__signup');
const genderSelect = document.getElementById('item-gender__signup');
const genderElements = document.querySelectorAll('.section-gender__select');

const dobSelect = document.getElementById('item-dob__signup');

let ans = 'null';

/** EVENT HANDLERS */

// Click the gender down button - EVENTLISTENER
//genderButton.addEventListener('click', function() {
genderSelect.addEventListener('click', function() {  
  let buttonCheck = document.getElementById('link-gender').innerHTML.trim();
  let buttonValue = setButtonValue(buttonCheck);

  // Press Button, Select Gender
  changeDropdownButton('gender', buttonValue);      // Change the button icon
  changeDropdownState('gender', buttonValue);       // Open/Close the dropdown menu

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
  changeDropdownButton('dob', buttonValue);      // Change the button icon
  changeDropdownState('dob', buttonValue);       // Open/Close the dropdown menu

});

$(function() {

  $("#select__dob").datepicker({
    changeYear: true
  });
  $("#select__dob").datepicker("setDate", "-18y");

});


/** FUNCTIONS */

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

/** Change the icon on the dropdown button 
    Used for the gender and dob selectors on the signup */
function changeDropdownButton(dropdownValue, buttonValue) {
  console.log("dropdownValue = " + dropdownValue);

  if (buttonValue == 'down') {
    $('.section-nav').css('overflow', 'visible');

    // Check for gender else dob 
    if (dropdownValue == 'gender') {
      document.getElementById('link-gender').innerHTML = '<i class="fa fa-angle-up" id="down-chevron"></i>';
      return;

    }

    document.getElementById('link-dob').innerHTML = '<i class="fa fa-angle-up" id="down-chevron"></i>';
    return;

  }

  // Time out to raise gender dropbox
  setTimeout(function() {
    $('.section-nav').css('overflow', 'hidden');

    // Check for gender else dob 
    if (dropdownValue == 'gender') {
      document.getElementById('link-gender').innerHTML = '<i class="fa fa-angle-down" id="down-chevron"></i>';
      return;

    }

    document.getElementById('link-dob').innerHTML = '<i class="fa fa-angle-down" id="down-chevron"></i>';
    return;

  }, 250);

}

/** Change the state of the dropdown box
    Used for the gender and dob selectors on the signup */
function changeDropdownState(dropdownValue, buttonValue) {
  console.log("dropdownValue = " + dropdownValue);

  if (buttonValue == 'down') {
  // add the menu extension to section-nav parent

    // check for gender else dob
    if (dropdownValue == 'gender') {
      document.querySelector('.section-gender').classList.add('collapsed__gender');
      genderSetup.forEach(unhideVisibility);
      genderSetup.forEach(addActive);
      document.querySelector('.gender').classList.add('active');
      return;

    }

    document.querySelector('.section-dob').classList.add('collapsed__dob');
    
    //genderSetup.forEach(unhideVisibility);
    //genderSetup.forEach(addActive);

    dobSetup.forEach(unhideVisibility);
    dobSetup.forEach(addActive);
    
    document.querySelector('.dob').classList.add('active');

    return;    

  }

  // remove the menu extension to section-nav parent
  // check for gender else dob
  if (dropdownValue == 'gender') {
    document.querySelector('.section-gender').classList.remove('collapsed__gender');
    genderSetup.forEach(removeActive);
    document.querySelector('.gender').classList.remove('active');
  
    setTimeout(function() {
  
      genderSetup.forEach(hideVisibility);
      return;
  
    }, 500);

  }

  document.querySelector('.section-dob').classList.remove('collapsed__dob');
  dobSetup.forEach(removeActive);
  document.querySelector('.dob').classList.remove('active');

  setTimeout(function() {

    dobSetup.forEach(hideVisibility);
    return;

  }, 500);

}

