
const menu = document.getElementById('menu-bar');
const btnMenu = document.getElementById('btn-menu')
function closeMenu(){
    menu.style.right = "-200px";
    btnMenu.style.transform = "rotate(0deg)";
}

function showMenu(){
    menu.style.right = "0px";
    btnMenu.style.transform = "rotate(-360deg)";
}