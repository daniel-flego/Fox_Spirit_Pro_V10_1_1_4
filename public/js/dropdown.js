const genderButton = document.getElementById('controls-down__gender');
let ans = 'null';

// Click the gender down button - EVENTLISTENER
genderButton.addEventListener('click', function() {
  let buttonCheck = document.getElementById('link-gender').innerHTML.trim();
  let buttonValue = setButtonValue(buttonCheck);

  changeDropdownButton(buttonValue);      // Change the button icon
  changeDropdownState(buttonValue);       // Open/Close the dropdown menu

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

/** Change the icon on the dropdown button 
    Used for the gender and dob selectors on the signup */
function changeDropdownButton(buttonValue) {
  //console.log("changeDownButton = " + buttonValue);

  if (buttonValue == 'down') {
    document.getElementById('link-gender').innerHTML = '<i class="fa fa-angle-up" id="down-chevron"></i>';
    return;

  }

  document.getElementById('link-gender').innerHTML = '<i class="fa fa-angle-down" id="down-chevron"></i>';
  return;

}

/** Change the state of the dropdown box
    Used for the gender and dob selectors on the signup */
function changeDropdownState(buttonValue) {

  if (buttonValue == 'down') {

    // add the menu extension to section-nav parent
    document.querySelector('.section-gender').classList.add('collapsed__gender');
    genderSetup.forEach(addActive);
    document.querySelector('.gender').classList.add('active');
    return;

  }

  // remove the menu extension to section-nav parent
  document.querySelector('.section-gender').classList.remove('collapsed__gender');
  genderSetup.forEach(removeActive);
  document.querySelector('.gender').classList.remove('active');
  return;

}
