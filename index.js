const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");
const toggleNavbar = () => {

  nav_header.classList.toggle("active");
};
mobile_nav.addEventListener("click", () => toggleNavbar());
var tabButtons = document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPanles = document.querySelectorAll(".tabContainer .tabPanel");

function showPanel(panelIndex, colorCode){
  tabButtons.forEach(function(node){
    node.style.backgroundColor="";
    node.style.color="";
  });
  tabButtons[panelIndex].style.backgroundColor=colorCode;
  tabButtons[panelIndex].style.color="white";

  tabPanles.forEach(function(node){
    node.style.display="none";
  });
  tabPanles[panelIndex].style.display="block";
  tabPanles[panelIndex].style.backgroundColor="colorCode";
}

showPanel(0,'#3FF6FF');