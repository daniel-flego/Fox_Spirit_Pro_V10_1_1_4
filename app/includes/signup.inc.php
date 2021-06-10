
<?php

if (isset($_POST['submit__signup']))   {
  require "dbh.inc.php";

  $firstname = $_POST['firstname'];
  $lastname = $_POST['lastname'];
  $email = $_POST['email__signup'];
  $username = $_POST['username__signup'];
  $password = $_POST['pwd__signup'];
  $passwordRepeat = $_POST['pwd-repeat__signup'];

  if (empty($firstname) || empty($lastname) || empty($username) || empty($email) || empty($password) || empty($passwordRepeat)) {

    //header("Location: ../navigation.php?error=emptyfields&firstname=".$firstname."&lastname=".$lastname."&mail=".$email);

    header("Location: ../index.php?error=emptyfields&firstname=".$firstname."&lastname=".$lastname."&username".$username."&email=".$email);
    exit();

  }
  // Invalid email, username 
  else if ((!filter_var($email, FILTER_VALIDATE_EMAIL)) &&
           (!preg_match("/^[a-zA-Z0-9]*$/", $username))) {
    header("Location: ../index.php?error=invalidemailuid");
    exit();
    
  }
  // Invalid email
  else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    header("Location: ../index.php?error=invalidemail&uid".$username);
    exit();

  }
  else if (!preg_match("/^[a-zA-Z0-9]*$/", $username)) {
    header("Location: ../index.php?error=invalidusername&email".$email);
    exit();

  }

  // Invalid firstname and lastname
    else if ((!preg_match("/^[a-zA-Z0-9]*$/", $firstname)) &&
             (!preg_match("/^[a-zA-Z0-9]*$/", $lastname))) {
      header("Location: ../index.php?error=invalidfirstnamelastname");
      exit();

  }
  // invalid first name
  // this is for a basic name
  // mmtuts has used it for a username
  else if (!preg_match("/^[a-zA-Z0-9]*$/", $firstname)) {
    header("Location: ../index.php?error=invalidfirstname&mail".$email);
    exit();

  }
  // invalid last name
  // this is for a basic name
  // mmtuts has used it for a username
  else if (!preg_match("/^[a-zA-Z0-9]*$/", $lastname)) {
    header("Location: ../index.php?error=invalidlastname&mail".$email);
    exit();

  }
  // invalid passwords, the two dont match
  else if ($password !== $passwordRepeat) {
    header("Location: ../index.php?error=passwordcheck&firstname=".$firstname."&lastname".$lastname."&mail".$email);
    exit();

  }
  // check that the username is not already being used
  // uses sql statement to check within the database
  // uses a prepared statement
  else {

    $sql = "";

  }

}


/**
 * https://www.youtube.com/watch?v=LC9GaXkdxF8&t=187s
 * 54:20
 * 
 * 25.07
 */