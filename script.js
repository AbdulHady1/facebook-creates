
let shettingsmenu = document.querySelector(".shetting-menu");

let shettingMenu = document.getElementById("shettinTaggol"); 

shettingMenu.addEventListener("click", function(){
    shettingsmenu.classList.toggle("shetting-menu-height");
});



let darkBtn = document.getElementById("dark-btn"); 

darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme")
}