

// export let showButton = "loginsignbutton";
// const btn = document.querySelector("#togglebtn");

//  if (btn){
//     btn.addEventListener("click", () =>{
//         if(showButton === "loginsignbutton"){
//             showButton = "profilebutton";
//         }
//         else {
//             showButton = "loginsignbutton";
//         }
//         // changNavButton()

//         console.log("i am here ", showButton);
//         window.location.href = "http://127.0.0.1:5500/index.html";
//     });
//  }

const id = "25830659239-085c4n7pb1jgksvu7i04jih6k035h462.apps.googleusercontent.com";
const SECRET_KEY = "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";

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    alert("User signed out.");
    console.log('User signed out.');
  });
}

  function onSignIn(googleUser) {
    // Retrieve user information
    alert("on click ");
    var profile = googleUser.getBasicProfile();
    var email = profile.getEmail();
    var idToken = googleUser.getAuthResponse().id_token;
    
    // You can now use 'email' and 'idToken' for authentication or other purposes.
    // Send this data to your server for verification and user management.
    
    // Example: Display user information
   document.getElementById('firstname').textContent = profile.getName;
    document.getElementById('email').textContent = email;
    console.log("User ID: " + profile.getId());
    console.log("Full Name: " + profile.getName());
    console.log("Email: " + email);
    window.location.href = "Login.html";
    
    // You can also sign the user out if needed
    // var auth2 = gapi.auth2.getAuthInstance();
    // auth2.signOut().then(function () {
    //   console.log('User signed out.');
    // });
  }



const notifications = document.querySelector(".notifications");
//   buttons = document.querySelectorAll(".buttons .btn")

const toastDetails = {
  timer: 5000,
  success: {
    icon: "fa-circle-check",
    text: "Signup in Successfull.",
  },
  error: {
    icon: "fa-circle-xmark",
    text: "Hello World: This is an error toast.",
  },
  warning: {
    icon: "fa-triangle-exclamation",
    text: "Hello World: This is a warning toast.",
  },
  info: {
    icon: "fa-circle-info",
    text: "Hello World: This is an information toast.",
  },
  random: {
    icon: "fa-solid fa-star",
    text: "Hello World: This is a random toast.",
  },
}

const removeToast = (toast) => {
  toast.classList.add("hide")
  if (toast.timeoutId) clearTimeout(toast.timeoutId)
  setTimeout(() => toast.remove(), 500)
}

  const createToast = (id) => {
    console.log("we are crating taost");
  const { icon, text } = toastDetails[id]
  const toast = document.createElement("li")
  toast.className = `toast ${id}`
  toast.innerHTML = `<div class="column overflow-visible">
                         <i class="fa-solid ${icon}"></i>
                         <span>${text}</span>
                      </div>
                      <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>`
  notifications.appendChild(toast) 
  toast.timeoutId = setTimeout(() => removeToast(toast), toastDetails.timer)
}




 const signup = document.querySelector("#form");

 signup.addEventListener("submit",(e)=>{
   e.preventDefault();
    //  Window.location.replace("http://127.0.0.1:5500/htmlPages/UserHome.html?#");
     // Redirect to a new URL
    console.log("i am her");
    createToast("success");
    setTimeout(() => {
      
// window.location.href = "https://ankit-prajapati-24.github.io/minor-project/Login.html?";
window.location.href = "Login.html";
    }, 1000);

    console.log("hell oji");
 })

 
