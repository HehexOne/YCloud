var isOpen = false;
var navBarItems = document.getElementById("navbar-items-mobile");

var button = document.getElementsByClassName("open-button")[0];

function openNavBar() {
    if (isOpen) {
        navBarItems.style.display = "none";
        button.innerHTML = "V";
    } else {
        navBarItems.style.display = "flex";
        button.innerHTML = "X";
    }
    isOpen = !isOpen;
}