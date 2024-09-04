

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


console.log("dikkt hai bhai");
const notifications = document.querySelector(".notifications");
//   buttons = document.querySelectorAll(".buttons .btn")

const toastDetails = {
  timer: 5000,
  success: {
    icon: "fa-circle-check",
    text: "Log in Successfull.",
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




 const login = document.querySelector("#form");

 login.addEventListener("submit",(e)=>{
   e.preventDefault();
    //  Window.location.replace("http://127.0.0.1:5500/UserHome.html?#");
     // Redirect to a new URL
    console.log("i am her");
    createToast("success");
    setTimeout(() => {
      
// window.location.href = "https://ankit-prajapati-24.github.io/minor-project/UserHome.html";
window.location.href = "UserHome.html";
      
    }, 1000);

    console.log("hell oji");
 })
