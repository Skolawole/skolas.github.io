const harmburger = document.querySelector(".harmburger");
const navlist = document.querySelector(".navlist");

harmburger.addEventListener("click",()=>{
    harmburger.classList.toggle("active");
    navlist.classList.toggle("active");
})

document.querySelectorALL(".nav-link").forEach(n => n.addEventListener("click",()=>{
    harmburger.classList.remove("active");
    navlist.classList.remove("active");
    
}))