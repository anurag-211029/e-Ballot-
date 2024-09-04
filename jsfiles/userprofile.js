
const initial = `<div class="bg-white p-6 rounded-lg shadow-md" >
    <div class="flex justify-center mb-4" id="profileimg">
            <img id="profileimg" src="../assets/ap.jpg" name= "img" alt="Profile Image" class="w-32 h-32 rounded-full object-cover">
        </div>
    <div class="mb-4">
        <label for="profile-photo" class="block text-gray-700 font-semibold mb-2">Profile Photo</label>
        <input type="file" id="uploadfile" accept="image/*" class="w-full p-2 border border-gray-300 rounded-md">
    </div>
    <div class="mb-4">
        <label for="name" class="block text-gray-700 font-semibold mb-2">Name</label>
        <input type="text" id="name" placeholder="Your Name" class="w-full p-2 border border-gray-300 rounded-md">
    </div>
    <div class="mb-4">
        <label for="contact" class="block text-gray-700 font-semibold mb-2">Contact Information</label>
        <input type="text" id="contact" placeholder="Email or Phone" class="w-full p-2 border border-gray-300 rounded-md">
    </div>
    <div class="flex justify-end">
        <button  id="button" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200">Save</button>
    </div>
</div>`;
let firstButtonContent = `  <a href="http://127.0.0.1:5500/Login.html?#" class="flex items-center px-3 py-2 rounded-md hover:bg-yellow-500 font-bold hover:text-black transition-all duration-200 hover:scale-95"><li>Login</li></a>
<a  href="http://127.0.0.1:5500/SignUp.html?#" class="flex items-center px-3 py-2 rounded-md hover:bg-yellow-500 font-bold hover:text-black transition-all duration-200 hover:scale-95"><li>SignUp</li></a>
`;


const changepassword = `<div id="change-password-section">
    <hr class="mb-6">
    <h3 class="text-2xl font-semibold mb-2">Change Password</h3>
    <div class="mb-4">
        <label for="current-password" class="block text-gray-700 font-semibold mb-2">Current Password</label>
        <input type="password" id="current-password" class="w-full p-2 border border-gray-300 rounded-md">
    </div>
    <div class="mb-4">
        <label for="new-password" class="block text-gray-700 font-semibold mb-2">New Password</label>
        <input type="password" id="new-password" class="w-full p-2 border border-gray-300 rounded-md">
    </div>
    <div class="mb-4">
        <label for="confirm-password" class="block text-gray-700 font-semibold mb-2">Confirm New Password</label>
        <input type="password" id="confirm-password" class="w-full p-2 border border-gray-300 rounded-md">
    </div>
    <div class="flex justify-end">
        <button class="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-200">Change Password</button>
    </div>
</div>`;

const viewprofile = `
<div class="bg-white p-6 rounded-lg shadow-md" >
    <div class="flex justify-center mb-4 flex-col gap-2 font-bold items-center">
            <img src="../assets/ap.jpg" alt="Profile Image" class="w-32 h-32 rounded-full object-cover ">
            <div>Profile-photo</div>
        </div>
    
    <div class="mb-4">
        <label for="name" class="block text-gray-700 font-semibold mb-2">Name</label>
        <input  id="name" placeholder="Your Name" class="w-full p-2 border border-gray-300 rounded-md readonly">
    </div>
    <div class="mb-4">
        <label for="contact" class="block text-gray-700 font-semibold mb-2">Contact Information</label>
        <input type="text" id="contact" placeholder="Email or Phone" class="w-full p-2 border border-gray-300 rounded-md readonly">
    </div>
    <div class="mb-4">
        <label for="contact" class="block text-gray-700 font-semibold mb-2">Aadhar Information</label>
        <input type="text" id="contact" placeholder="Aadhar Number" class="w-full p-2 border border-gray-300 rounded-md readonly">
    </div>
    <div class="flex justify-end">
        <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200">Save</button>
    </div>
</div>
`

const notifications = document.querySelector(".notifications");
//   buttons = document.querySelectorAll(".buttons .btn")

const toastDetails = {
  timer: 5000,
  success: {
    icon: "fa-circle-check",
    text: "Profile Updated  Successfully.",
  },
  error: {
    icon: "fa-circle-xmark",
    text: "Profile Couldn't Update Successfully",
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




const containt = document.querySelector('#containt');
const updateprofilebtn = document.querySelector('#update-profile-btn'); 
const changepasswordbtn = document.querySelector('#change-password-btn');
const viewprofilebtn = document.querySelector('#view-profile-btn');
// const containtmobile = document.querySelector('#containt');
const updateprofilebtnmobile = document.querySelector('#update-profile-btn-mobile'); 
const changepasswordbtnmobile = document.querySelector('#change-password-btn-mobile');
const viewprofilebtnmobile = document.querySelector('#view-profile-btn-mobile');
// const usermenudata = document.querySelector('.usermenudata');




document.addEventListener("DOMContentLoaded",() =>{
    containt.innerHTML = initial;
    containtmobile.innerHTML = initial;
    
})

$(document).ready(function() {
    $("#loader").hide();
    let file = null;
    $("#uploadfile").change((e) => {
        console.log(e.target.files[0]);
        file = e.target.files[0];
        console.log(file);
    });

    $("#button").click(function () {
        if(!file) return;
        $("#loader").show();
        const data = new FormData();
        data.append("name", "ankit");
        data.append("img", file);
        console.log(data);

        const response = fetch("http://localhost:4000/api/v1/profile/test", {
            method: "POST",
            body: data, 
        });

        response
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error("Network response was not ok");
                }
            })
            .then((data) => {
                let img = ` <img  src=${data.url} name= "img" alt="Profile Image" class="w-32 h-32 rounded-full object-cover">`
                let profileImage = document.querySelector("#profileimg");
                let menuprofile1 = document.querySelector("#menuprofile1");
                let menuprofile2 = document.querySelector("#menuprofile2");
                profileImage.innerHTML = img;
                if(menuprofile1){
                    menuprofile1.innerHTML = img;
                }
                if(menuprofile2){
                    menuprofile2.innerHTML = img;
                }
                $("#loader").hide(); 
                createToast("success");                      
                console.log(data.url);

            })
            .catch((error) => {
                $("#loader").hide();  
                createToast("error");      
                console.error("Error: ", error);
            });
    });

});

if(updateprofilebtn || updateprofilebtnmobile){
    updateprofilebtn.addEventListener('click', () =>{
    containt.innerHTML = initial;
})
updateprofilebtnmobile.addEventListener('click', () =>{
    containt.innerHTML = initial;
    setTimeout(() => {
        const list3 = mobile_nav.classList;
        list3.toggle("active_nav");
     }, 1000);
})

}

if(changepasswordbtn){
    changepasswordbtn.addEventListener('click', () =>{
    // containt.innerHTML = changepassword;
    containt.innerHTML = changepassword;
    // containtmobile.innerHTML = changepassword;
})
}

if(changepasswordbtnmobile){
    changepasswordbtnmobile.addEventListener('click', () =>{
    // containt.innerHTML = changepassword;
    containt.innerHTML = changepassword;
    setTimeout(() => {
        const list3 = mobile_nav.classList;
        list3.toggle("active_nav");
     }, 1000);
    // containtmobile.innerHTML = changepassword;
})
}
if(viewprofilebtn){
    viewprofilebtn.addEventListener('click', () =>{
    // containt.innerHTML = changepassword;
    containt.innerHTML = viewprofile;
    
    // containtmobile.innerHTML = viewprofile;
})
}
if(viewprofilebtnmobile){
    viewprofilebtnmobile.addEventListener('click', () =>{
    // containt.innerHTML = changepassword;
    containt.innerHTML = viewprofile;
     setTimeout(() => {
        const list3 = mobile_nav.classList;
        list3.toggle("active_nav");
     }, 1000);
    // containtmobile.innerHTML = viewprofile;
})
}

const close = document.querySelector(".close");
const open = document.querySelector(".open");
const mobile_nav = document.querySelector(".mobile_nav_profile");

open.addEventListener("click", () =>{
  const list = close.classList;
  list.toggle("active_nav");
  const list2 = open.classList;
  list2.toggle("active_nav");
  const list3 = mobile_nav.classList;
  list3.toggle("active_nav");
});

close.addEventListener("click", () =>{
  const list = close.classList;
  list.toggle("active_nav");
  const list2 = open.classList;
  list2.toggle("active_nav");
  const list3 = mobile_nav.classList;
  list3.toggle("active_nav");
});


  // Function to show something
  function showFunction() {
    const list = open.classList;
    list.add("active_nav");
  }
  function hidefunction() {
    const list = open.classList;
    list.remove("active_nav");
  }

  // Function to handle window resize
  function handleResize() {
    if (window.innerWidth <= 750) {
      // Call the show function
      showFunction();
    }
    if (window.innerWidth >= 750) {
        // Call the show function
        hidefunction();
      }
    // if (window.innerWidth > 950) {
    //   // Call the show function
    //   hidefunction();
    // }
   
  }

  window.addEventListener("resize", handleResize);
  handleResize();

  // ****************************** upload img ****************************


  // Make sure the DOM is ready before using jQuery

  
