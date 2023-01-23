
function Mouseover1() {

    document.getElementById("firstimagecard").src = "./assets/images/Cp.jpg";
}

function Mouseout1() {
    document.getElementById("firstimagecard").src = "./assets/images/card1.jpg";
}

function Mouseover2() {

    document.getElementById("secondimagecard").src = "./assets/images/cardflip2.jpg";
}

function Mouseout2() {
    document.getElementById("secondimagecard").src = "./assets/images/card2.png";
}


function Mouseover3() {

    document.getElementById("thirdimagecard").src = "./assets/images/cardflip3.jpg";
}

function Mouseout3() {
    document.getElementById("thirdimagecard").src = "./assets/images/card3.jpg";
}


function SignupValidation() {
    var username = document.formvalid.name.value;
    var useremail = document.formvalid.email.value;
    var password = document.formvalid.password.value;
    var confirm_password = document.formvalid.confirm_password.value;


  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (username == null || username == "") {
    alert("Name can't be blank");
    return false;
  }
  else if (username.length < 4) {
    alert("Name must be atleast 4 characters");
    return false;
  }
  else if (!isNaN(username)) {
    alert("Don't enter digits in name");
    return false;
  }

  else if (!useremail.match(mailformat)) {
    alert("Please enter valid email address \n with proper format for eg. asraghuvanshi52@gmail.com");
    return false;
  }

  else if (password.length < 6) {
    alert("Password must be at least 6 characters max 15.");
    return false;
  }
  else if (password.length > 18) {
    alert("Password must be less than 18 characters");
    return false;
  }
  else if (password != confirm_password) {
    alert("Password not matching");
    return false;
  }
  else {
    alert("Thankyou for registering");
    const UserData = {
      name: username,
      email: useremail,
      password: password
    }

    window.localStorage.setItem('user', JSON.stringify(UserData));
  }
}

function LoginValidation() {
  let useremail = document.lformvalid.email.value;
  let password = document.lformvalid.password.value;

  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

     if(!useremail.match(mailformat)) {
        alert("Please enter valid email address \n with proper format for eg. asraghuvanshi52@gmail.com");
        return false;
     }
     
     else if ((password.length < 6)||(password.length > 18)) {
        alert("Password must be at least 6 characters max 15.");
        return false;
      }
      var get = localStorage.getItem("user");
      var obj = JSON.parse(get);
      var StoredEmail = obj.email;
      var StoredPassword = obj.password;
      var userEmail = document.getElementById('useremail');
      var userPassword = document.getElementById('userpassword');
      if(userEmail.value == StoredEmail && userPassword.value == StoredPassword)
       { 
             alert('Login Successfull');
             return true;
       }
       else {
           alert('Error on login');
           return false;
       }

}
