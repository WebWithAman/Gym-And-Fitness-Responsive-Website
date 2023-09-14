/*************************************************************** 
    Get Mobile Toggle Button And Nav
***************************************************************/
const mobileToggleBtn = document.querySelector(".mobile-toggle-btn");
const nav = document.querySelector("nav");
const toggleIcon = document.querySelector(".mobile-toggle-btn i");


/****************************************************************
  Add Active Class to Nav On Click For Display Nav Links 
****************************************************************/
mobileToggleBtn.onclick = function () {
    nav.classList.toggle("active");
    toggleIcon.classList.toggle("fa-times");
}