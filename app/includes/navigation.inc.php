
<?php
  //require "signup.inc.php";
  //echo "YES" . "<br>";
  //console.log("YES");

  if ((!isset($_POST['login'])) && (!isset($_POST['signup']))) {
    echo "YES" . "<br>";

    if (isset($_POST['submit__login'])) {
      echo "Login";  
    }
    else if (isset($_POST['submit__signup'])) {
      echo "Signup";
      require "signup.inc.php";

    }

  }
  else {
    // Dont load page!!
    // Button for drop down navigation is clicked

  }


?>