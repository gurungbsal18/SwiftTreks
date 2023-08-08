// cost include and exclude button

let costIncludeBtn = document.querySelector(".cost-include-btn");
let costExcludeBtn = document.querySelector(".cost-exclude-btn");
let costIncludeContent = document.querySelector(".cost-include-content");
let costExcludeContent = document.querySelector(".cost-exclude-content");

costIncludeBtn.addEventListener("click", function () {
  costExcludeContent.classList.add("hide");
  costIncludeContent.classList.remove("hide");
  costExcludeContent.style.display = "none";
  costIncludeBtn.classList.add("btn-success");
  costIncludeBtn.classList.remove("btn-outline-success");
  costExcludeBtn.classList.add("btn-outline-danger");
  costExcludeBtn.classList.remove("btn-danger");
});
costExcludeBtn.addEventListener("click", function () {
  costIncludeContent.classList.add("hide");
  costExcludeContent.style.display = "block";
  costExcludeBtn.classList.add("btn-danger");
  costExcludeBtn.classList.remove("btn-outline-danger");
  costIncludeBtn.classList.add("btn-outline-success");
  costIncludeBtn.classList.remove("btn-success");
});

// date picker
document.addEventListener("DOMContentLoaded", function () {
  flatpickr("#dateInput", {
    dateFormat: "Y-m-d", // Format of the selected date (change as needed)
    enableTime: false, // Set to true if you want to enable time selection as well
  });
});

// trip navbar sticky 
let tripNavbar = document.querySelector('.trip-navbar');
const initialoffset = tripNavbar.offsetTop;

window.addEventListener('scroll', function (){
  const scrollPos = window.scrollY;

  if(scrollPos >= initialoffset) {
    tripNavbar.style.position = 'fixed';
    tripNavbar.classList.add('sticky-trip-nav');
  } else {
    tripNavbar.style.position = 'relative';
    tripNavbar.classList.remove('sticky-trip-nav');
  }
});

// booking price for mobile device only
window.onscroll = function () {
  let mobilePrice = document.querySelector(".mobile-trip-price");
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    mobilePrice.style.display = "block";
  } else {
    mobilePrice.style.display = "none";
  }
};
