<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="description" content="This is an example of a meta description. This will often show up in the search results.">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Fox Spirit Procedural</title>
  <link rel="stylesheet" href="../public/css/main.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <!-- This link below is for the signup previous/next/submit buttons!! -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>

  <!-- datePicker -->
  <!--<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>-->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min.js"></script>
  <!--<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">-->

</head>
<body>
  
  <header class="header">

    <!-- 
      Start From Here Tomorrow/Today
      https://tryphp.w3schools.com/showphp.php?filename=demo_form_validation_escapechar
      http://coredogs.com/lesson/form-and-php-validation-one-page.html

    -->

    <!--
      Here, navigation.inc.php chooses between loging in or signing up
     -->
    <form action="includes/navigation.inc.php" method="post">
    <!--<form action="includes/signup.inc.php" method="post">-->

      <?php
        require "navigation.php";
      ?>

    </form>

  </header>
  