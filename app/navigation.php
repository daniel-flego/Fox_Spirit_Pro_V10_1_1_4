<nav class="nav">

  <ul class="section-nav">
    <!-- Logo -->
    <li class="section-nav__item" id="item-logo">
      <a class="section-nav__link" id="link-logo" href="#">
        <img class="section-nav__img" src="../public/img/foxspirit_logo.jpg" alt="foxspirit__logo">
      </a>
    </li>

    <!-- Toggle -->
    <li class="section-nav__item" id="item-toggle" name="menu">
      <a class="section-nav__link" id="link-toggle" href="#">
        <!--<i class="fa fa-bars"></i>-->
      </a>
    </li>

    <!-- Buttons -->
    <li class="section-nav__item button" id="item-login" name="login">
      <a class="section-nav__button" id="button-login" href="#">
        Login
      </a>
    </li>
    
    <li class="section-nav__item button" id="item-signup" name="signup">
      <a class="section-nav__button" id="button-signup" name="signup" href="#">
        Signup
      </a>
    </li>

    <!-- Collapsible Menu -->
    <li class="section-nav__item menu" id="item-menu__menu">
      <p class="section-nav__pre" id="pre-menu">
        Menu
      </p>
    </li>
    <li class="section-nav__item menu" id="item-news__menu">
      <a class="section-nav__link" id="link-news" href="#">
        News
      </a>
    </li>
    <li class="section-nav__item menu" id="item-about__menu">
      <a class="section-nav__link" id="link-about" href="#">
        About
      </a>
    </li>
    <li class="section-nav__item menu" id="item-booking__menu">
      <a class="section-nav__link" id="link-booking" href="#">
        Booking
      </a>
    </li>
    <li class="section-nav__item menu" id="item-contact__menu">
      <a class="section-nav__link" id="link-contact" href="#">
        Contact
      </a>
    </li>

    <!-- Collapsible Login -->
    <!-- Title -->
    <li class="section-nav__item login" id="item-login__login">
      <p class="section-nav__pre" id="pre-login">
        Welcome Back
      </p>
    </li>
    <!-- Username -->
    <li class="section-nav__item login" id="item-username__login">
      <input type="text" class="section-nav__input" id="input-username" name="username" placeholder="Username...">  
    </li>
    <!-- Password -->
    <li class="section-nav__item login" id="item-password__login">
      <input type="password" class="section-nav__input" id="input-password" name="pwd" placeholder="Password...">  
    </li>
    <!-- Submit Login -->
    <li class="section-nav__item login" id="item-submit__login">
      <button type="submit" class="section-nav__button" id="button-submit__login" name="login__submit">
        Login
      </button>
    </li>

<!--  -- Collapsible Logout -- ????
    <li class="section-nav__item logout" id="item-submit__logout">
      <button  type="submit" class="section-nav__button" id="button-submit__logout" name="submit-logout">
        Logout
      </button>
    </li>
-->
  
    <!-- Collapsible Signup -->
    <!-- 
      Pt 1 
      1. First Name, 2. Last Name, 3. Email, 4. Address, 
      5. Phone(Mobile or Home)

      Pt 2 
      6. Username, 7. Password, 8. Repeat Password,
      9. Subscription(yes/no checkbox), 10. Submit(Signup)
    -->

    <!-- Title -->
    <li class="section-nav__item signup" id="item-signup__signup">
      <p class="section-nav__pre" id="pre-signup">
        Sign Up - It's Free
      </p>
    </li>
    <!-- First Name -->
    <li class="section-nav__item signup" id="item-firstname__signup">
      <input class="section-nav__input" id="input-firstname" name="firstname" type="text" placeholder="First Name...">  
    </li>
    <!-- Last Name -->
    <li class="section-nav__item signup" id="item-lastname__signup">
      <input class="section-nav__input" id="input-lastname" name="lastname" type="text" placeholder="Last Name...">  
    </li>
    <!-- Address -->
    <li class="section-nav__item signup" id="item-address__signup">
      <input class="section-nav__input" id="input-address" name="address__signup" type="text" placeholder="Address...">  
    </li>
    <!-- Phone -->
    <li class="section-nav__item signup" id="item-phone__signup">
      <input class="section-nav__input" id="input-phone" name="phone__signup" type="text" placeholder="Phone...">  
    </li>
    <!-- Email -->
    <li class="section-nav__item signup" id="item-email__signup">
      <input class="section-nav__input" id="input-email" name="email__signup" type="text" placeholder="Email...">  
    </li>

    <!-- ********************************************************************* -->
    
    
    <!-- Gender - Drop Down Box Output --> 
    <li class="section-nav__item signup" id="item-gender__signup">

      <!-- Gender - Dropdown Box -->
      <div class="gender">

        <span class="section-nav__span" id="span-gender" name="gender__signup">Gender</span>
        <!-- Dropdown Selections -->
        <ul class="section-gender">

          <li class="section-gender__item signup" id="item-male__gender">
            <a class="section-gender__select" id="select-gender__male" name="male" href="#">
              Male
            </a>
          </li>
          <li class="section-gender__item signup" id="item-female__gender">
            <a class="section-gender__select" id="select-gender__female" name="female" href="#">
              Female
            </a>
          </li>
          
          <li class="section-gender__item signup" id="item-other__gender">
            <a class="section-gender__select" id="select-gender__other" name="other" href="#">
              Other
            </a>
          </li>
          

        </ul>

      </div>

      <!-- Button -->
      <div class="down"  id="controls-down__gender">
        <a href="#" class="section-nav__link" id="link-gender">
          <i class="fa fa-angle-down" id="down-chevron"></i>
        </a>
      </div>
      
    </li>

    <!-- ********************************************************************* -->

    <!-- Date Of Birth - Date Picker --> 
    <li class="section-nav__item signup" id="item-dob__signup">

      <div class="dob">

        <!-- Date Of Birth -->
        <span class="section-nav__span" id="span-dob" name="dob">Date Of Birth</span>
        <!-- Date Of Birth Calender Selector -->
        <ul class="section-dob">

          <li class="section-dob__item signup" id="item__dob">
            <div class="section-dob__select" id="select__dob" type="text"></div>

            <!--
            <a class="section-gender__select" id="select-gender__male" name="male" href="#">
              Male
            </a>
            -->

          </li>
        
        </ul>

      </div>

      <!-- Button -->
      <div class="down" id="controls-down__dob">
        <a href="#" class="section-nav__link" id="link-dob">
          <i class="fa fa-angle-down" id="down-chevron"></i>
        </a>
      </div>

    </li>

    <!-- ********************************************************************* -->


    <!-- Username -->
    <li class="section-nav__item signup" id="item-username__signup">
      <input class="section-nav__input" id="input-username" name="username__signup" type="text" placeholder="Username...">  
    </li>
    <!-- Password -->
    <li class="section-nav__item signup" id="item-password__signup">
      <input class="section-nav__input" id="input-password" name="pwd__signup" type="text" placeholder="Password...">  
    </li>
    <!-- Repeat Passsword -->
    <li class="section-nav__item signup" id="item-repeat__signup">
      <input class="section-nav__input" id="input-repeat" name="pwd-repeat__signup" type="text" placeholder="Repeat Password...">  
    </li>

    <!-- Subscription -->
    <li class="section-nav__item signup" id="item-subscribe__signup">
      
      <label class="section-nav__label" id="label-yes" name="subscribe-label__signup" for="yes">
        Subscribe to our newsletter?
      </label>

      <!--
      <input class="section-nav__input" id="input-yes" name="subscribe-yes__signup" type="checkbox" value="no" checked="false">
      -->
      <input class="section-nav__input" id="checkbox-subscribe" name="subscribe__signup" type="checkbox">

    </li>

    <!-- Submit Button -->
    <li class="section-nav__item signup" id="item-submit__signup">

      <div class="controls noPrev">

        <div class="left" id="controls-left">
          <a href="#" class="prev" id="prev">
            <i class="fa fa-angle-left" id="left-chevron"></i>
          </a>
        </div>

        <div class="next__container" id="next-container">
          
          <div class="page">
            <span class="current" data-current="1">1</span>
            &nbsp;of&nbsp;
            <span class="total"  data-total="2">2</span>
          </div>
          <div class="right" id="controls-right">
            <a href="#" class="next" id="next">
              <i class="fa fa-angle-right" id="right-chevron"></i>
            </a>
          </div>

        </div>

        <!-- Changes to signup submit button on page 2 - No Next -->
        <button type="submit" class="section-nav__button" id="button-submit__signup" name="signup__submit">
          Signup
        </button>

      </div>

    </li>

  </ul>

</nav>



    <!-- ORIGINAL
    <li class="section-nav__item login" id="item-mailuid__login">
      <input type="text" class="section-nav__input" id="input-mailuid" name="mailuid" placeholder="Email/Username...">  
    </li>
    -->
    <!-- ORIGINAL USENAME/EMAIL
    <li class="section-nav__item signup" id="item-mailuid__signup">
      <input class="section-nav__input" id="input-mailuid" name="mailuid__signup" type="text" placeholder="Email/Username...">  
    </li>
    -->




        <!-- Lesson-1 
          https://www.youtube.com/watch?v=LC9GaXkdxF8&t=187s
          upto - 15:41
          upto - 54:20
          -->


    <!-- Signup Previous -->
    <!-- 
      1. Make it invisible when page 1 is active
      2. Make it visible when page 2 is active
      3. It goes back to page 1 when selected 
    -->
    <!--
    <li class="section-nav__item signup" id="item-prev__signup">

      <button class="section-nav__button" id="button-prev__signup" name="submit__signup" type="submit">
        Prev
      </button>

    </li>
    -->

    <!-- Signup Next/Submit -->
    <!-- 
      1. Make it a next button to load the page 2
      2. When page 2 is loaded turn it into a submit button
    -->
    <!--
    <li class="section-nav__item signup" id="item-submit__signup">

      <button class="section-nav__button" id="button-submit__signup" name="submit__signup" type="submit">
        Signup
      </button>

    </li>
    -->

    <!-- Making Combined Submit Previous Buttons -->

<!--
      <a class="section-nav__link" id="link-left" href="#"><i class="fa fa-chevron-left"></i></a>
      
      <a class=""></a>
-->

<!--

    <!-- Gender, drop downbox with Male, Female, Other as options. 
    <li class="section-nav__item signup" id="item-gender__signup">
      <select class="section-nav__input" id="input-gender" name="gender" type="text" placeholder="Gender...">
        <option class="gender__option" value="none">Select Geneder</option>
        <option class="gender__option" value="male">Male</option>
        <option class="gender__option" value="female">Female</option>
        <option class="gender__option" value="other">Other</option>
      </select>  
    </li>

    <!-- Date of birth, date element, I can get the age from. 
    <li class="section-nav__item signup" id="item-dob__signup">
      <input class="section-nav__input" id="input-dob" name="dob" type="date" placeholder="Date Of Birth...">  
    </li>

-->


          <!-- Month 
          <span class="section-nav__span" id="span-month" name="month">Month</span>

          <!- Day 
          <span class="section-nav__span" id="span-day" name="day">Day</span>

          <!- Year 
          <span class="section-nav__span" id="span-year" name="year">Year</span>
          -->