
<?php
echo "This is it";
if (isset($_POST['signup__submit']))   {
  //require "dbh.inc.php";

  // page 1
  $firstName = $_POST['firstname__signup'];
  $lastName = $_POST['lastname__signup'];
  $address = $_POST['address__signup'];
  $phone = $_POST['phone__signup'];
  $email = $_POST['email__signup'];

  // page 2
  $gender = $_POST['gender__signup'];
  $dob = $_POST['dob__signup'];
  $userName = $_POST['username__signup'];
  $pwd = $_POST['pwd__signup'];
  $pwdRepeat = $_POST['pwd-repeat__signup'];
  // bc it's a checkbox
  $subscribe = isset($_POST['subscribe__signup']) ? 1 : 0;

  require_once 'dbh.inc.php';
  require_once 'functions.inc.php';

  if (emptyInputSignup($firstName, $lastName, $address, $phone, $email, $gender, $dob, 
  $userName, $pwd, $pwdRepeat, $subscribe) !== false) {
    //header("location: ../signup.php");
    //header("location: ../navigation.php?error=emptyinput");
    header("location: ../header.php?error=emptyinput");
    exit();
  }
  if (invalidUid($userName) !== false) {
    //header("location: ../signup.php");
    //header("location: ../navigation.php?error=invaliduid");
    header("location: ../header.php?error=invaliduid");
    exit();
  }
  if (invalidEmail($email) !== false) {
    //header("location: ../signup.php");
    //header("location: ../navigation.php?error=invalidemail");
    header("location: ../header.php?error=invalidemail");
    exit();
  }
  if (pwdMatch($pwd, $pwdRepeat) !== false) {
    //header("location: ../signup.php");
    //header("location: ../navigation.php?error=pwdsnomatch");
    header("location: ../header.php?error=pwdsnomatch");
    exit();
  }
  if (uidExists($conn, $userName, $email) !== false) {
    //header("location: ../signup.php");
    //header("location: ../navigation.php?error=pwdsnomatch");
    header("location: ../header.php?error=pwdsnomatch");
    exit();
  }

  createUser($conn, $firstName, $lastName, $address, $phone, $email, $gender, $dob, $userName, $pwd, $subscribe);



  // add the others later!!

}
else {
  //header("location: ../signup.php");
  //header("location: ../navigation.php");
  //header("location: ../header.php");
  //echo "HERE WE ARE!!";
  exit();
}




/**
 * https://www.youtube.com/watch?v=LC9GaXkdxF8&t=187s
 * 54:20
 * 
 * 25.07
 * 
 * 
 * Downloads/MMTUTS Downloads/PHP/php44.zip.php44 
 */



 /**
  * https://www.youtube.com/watch?v=gCo6JqGMi30
  * 
  * 58:45
  */