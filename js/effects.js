var btn_menu = document.querySelector("#btn-mobile-menu");
var btn_close_menu = document.querySelector("#btn-close-menu");
var mobile_menu = document.querySelector("#sticky-navbar");
var options = document.querySelectorAll("#sticky-navbar ul li");

btn_menu.addEventListener("click", function(){
    this.style.display = "none";
    btn_close_menu.style.display = "block";
    mobile_menu.style.display = "flex";
    mobile_menu.classList.toggle("sticky-navbar-show");
});

btn_close_menu.addEventListener("click", function(){
    this.style.display = "none";
    btn_menu.style.display = "block";
    mobile_menu.classList.toggle("sticky-navbar-show");
});


// closing menu clicking options

for(i=0; i < options.length; i++){
    options[i].addEventListener("click", function(){
        mobile_menu.classList.toggle("sticky-navbar-show");
        btn_menu.style.display = "block";
        btn_close_menu.style.display = "none";
    });
}






