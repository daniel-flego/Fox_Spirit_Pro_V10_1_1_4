//const genderButton = document.getElementById('controls-down__gender');
//const genderList = document.getElementById('item-gender__signup');
const genderSelect = document.getElementById('item-gender__signup');
const genderElements = document.querySelectorAll('.section-gender__select');

let ans = 'null';

/** FUNCTIONS */

// Click the gender down button - EVENTLISTENER
//genderButton.addEventListener('click', function() {
genderSelect.addEventListener('click', function() {  
  let buttonCheck = document.getElementById('link-gender').innerHTML.trim();
  let buttonValue = setButtonValue(buttonCheck);

  // Press Button, Select Gender
  changeDropdownButton(buttonValue);      // Change the button icon
  changeDropdownState(buttonValue);       // Open/Close the dropdown menu

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
function changeDropdownButton(buttonValue) {
  //console.log("changeDownButton = " + buttonValue);

  if (buttonValue == 'down') {
    $('.section-nav').css('overflow', 'visible');

    document.getElementById('link-gender').innerHTML = '<i class="fa fa-angle-up" id="down-chevron"></i>';
    return;

  }

  // Time out to raise gender dropbox
  setTimeout(function() {
    $('.section-nav').css('overflow', 'hidden');

    document.getElementById('link-gender').innerHTML = '<i class="fa fa-angle-down" id="down-chevron"></i>';
    return;

  }, 250);

}

/** Change the state of the dropdown box
    Used for the gender and dob selectors on the signup */
function changeDropdownState(buttonValue) {

  if (buttonValue == 'down') {

    // add the menu extension to section-nav parent
    document.querySelector('.section-gender').classList.add('collapsed__gender');
    genderSetup.forEach(unhideVisibility);
    genderSetup.forEach(addActive);
    document.querySelector('.gender').classList.add('active');
    return;

  }

  // remove the menu extension to section-nav parent
  document.querySelector('.section-gender').classList.remove('collapsed__gender');
  genderSetup.forEach(removeActive);
  document.querySelector('.gender').classList.remove('active');

  setTimeout(function() {

    genderSetup.forEach(hideVisibility);
    return;

  }, 500);

}

