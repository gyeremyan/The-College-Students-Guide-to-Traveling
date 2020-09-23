 function signIn(){
   var email = document.getElementById("inputEmail").value;
   var password = document.getElementById("inputPassword").value;
   console.log("Email: "+ email + " Password: "+ password);
   var origin = window.location.origin;
   var newLocation = origin + "/Users/georgeyeremyan/OneDrive/Documents/Programs/Bootstrap Project/MainPage.html";
   location.assign(newLocation);
   document.cookie = "user_authenticated=1;";
   alert("Welcome Back!")

   }
