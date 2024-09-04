// <!-- *************************************************************************************************************************************** -->
//   <!-- *                                                   SLIDER                                                                                  * -->
//   <!-- *                                                                                                                                       *   -->
//   <!-- *************************************************************************************************************************************** -->
   

function modulo(number, mod) {
    let result = number % mod;
    if (result < 0) {
      result += mod;
    }
    return result;
  }
  
  function setUpCarousel(carousel) {
    function handleNext() {
      currentSlide = modulo(currentSlide + 1, numSlides);
      changeSlide(currentSlide);
    }
  
    function handlePrevious() {
      currentSlide = modulo(currentSlide - 1, numSlides);
      changeSlide(currentSlide);
    }
  
    function changeSlide(slideNumber) {
      carousel.style.setProperty('--current-slide', slideNumber);
    }
  
    // get elements
    const buttonPrevious = carousel.querySelector('[data-carousel-button-previous]');
    const buttonNext = carousel.querySelector('[data-carousel-button-next]');
    const slidesContainer = carousel.querySelector('[data-carousel-slides-container]');
  
    // carousel state we need to remember
    let currentSlide = 0;
    const numSlides = slidesContainer.children.length;
  
    // set up events
    buttonPrevious.addEventListener('click', handlePrevious);
    buttonNext.addEventListener('click', handleNext);
  }
  
  const carousels = document.querySelectorAll('[data-carousel]');
  carousels.forEach(setUpCarousel);



// <!-- *************************************************************************************************************************************** -->
//   <!-- *                                                   MOBILE NAVBAR                                                                                  * -->
//   <!-- *                                                                                                                                       *   -->
//   <!-- *************************************************************************************************************************************** -->
     
  
const close = document.querySelector(".close");
const open = document.querySelector(".open");
const mobile_nav = document.querySelector(".mobile_nav");

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
    if (window.innerWidth <= 950) {
      // Call the show function
      showFunction();
    }
    if (window.innerWidth > 950) {
      // Call the show function
      hidefunction();
    }
  }

  window.addEventListener("resize", handleResize);
  handleResize();
