
<?php
  //require "signup.inc.php";
  //echo "YES" . "<br>";
  //console.log("YES");

  if ((!isset($_POST['login'])) && (!isset($_POST['signup']))) {
    echo "YES" . "<br>";

    if (isset($_POST['login__submit'])) {
      echo "Login";  
    }
    else if (isset($_POST['signup__submit'])) {
      echo "Signup";
      require "signup.inc.php";

    }

  }
  else {
    // Dont load page!!
    // Button for drop down navigation is clicked

  }


?>