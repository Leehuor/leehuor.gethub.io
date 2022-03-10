let hamberger = document.getElementById("hamberger");
let menu_list = document.querySelector(".menu_list");

hamberger.addEventListener("click" , ()=>{
    menu_list.classList.toggle("active");
})