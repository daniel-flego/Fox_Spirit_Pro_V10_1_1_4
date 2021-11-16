<?php

function emptyInputSignup($firstName, $lastName, $address, $phone, $email, $gender, $dob, $userName, $password, $passwordRepeat, $subscription) {
  $result;
  
  if (empty($firstName) || empty($lastName) || empty($address) || empty($phone) || empty($email) || empty($gender) || empty($dob) || empty($userName) || empty($password) || empty($passwordRepeat) || empty($subscription)) {
    $result = true;

  }
  else {
    $result = false;

  }

  return $result;

}

function invalidUid($userName) {
  $result;
  
  if (!preg_match("/^[a-zA-Z0-9]*$/", $userName)) {
    $result = true;

  }
  else {
    $result = false;

  }

  return $result;

}

function invalidEmail($email) {
  $result;
  
  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $result = true;

  }
  else {
    $result = false;

  }

  return $result;

}

function pwdMatch($pwd, $pwdRepeat) {
  $result;
  
  if ($pwd !== $pwdRepeat) {
    $result = true;

  }
  else {
    $result = false;

  }

  return $result;

}

function uidExists($conn, $userName, $email) {
  $sql = "SELECT * FROM users WHERE userID = ? OR usersEmail = ?;";
  $stmt = mysqli_stmt_init($conn);

  if (!mysqli_stmt_prepare($stmt, $sql)) {
    header("location: ../header.php?error=stmtfailed");
    exit();
  }

  mysqli_stmt_bind_para($stmt, "ss", $userName, $email);
  mysqli_stmt_execute($stmt);

  $resultData = mysqli_stmt_get_result($stmt);

  if ($row = mysqli_fetch_assoc($resultData)) {
    return $row;
  }
  else {
    $result = false;

    return $result;
  }

  mysqli_stmt_close($stmt);

}

function createUser($conn, $firstName, $lastName, $address, $phone, $email, $gender, $dob, $userName, $pwd, $subscription) {
  $sql = "INSERT INTO users (firstName, lastName, address, phone, email, gender, dob) VALUES (?, ?, ?, ?, ?, ?, ?);";
  $stmt = mysqli_stmt_init($conn);

  if (!mysqli_stmt_prepare($stmt, $sql)) {
    header("location: ../header.php?error=stmtfailed");
    exit();
  }

  $hashedPwd = password_hash($pwd, PASSWORD_DEFAULT);

  mysqli_stmt_bind_para($stmt, "sssssss", $firstName, $lastName, $address, $phone, $email, $gender, $dob, $userName, $hashedPwd, $subscription);
  mysqli_stmt_execute($stmt);
  mysqli_stmt_close($stmt);

  header("location: ../header.php?error=none");
  exit();
}

/**
 * https://www.youtube.com/watch?v=gCo6JqGMi30
 * 
 * 1:21:45
 */
