const hamburger = document.querySelector('#header .header .nav-bar .nav-list .hamburger')
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul') 
const header = document.querySelector('.header.container')
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul a')

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
    console.log("added");
})

document.addEventListener('scroll',()=>{
    var scroll_poistion = window.scrollY;
    if(scroll_poistion > 500){
        header.style.backgroundColor = "#29323c";
    }
    else{
        header.style.backgroundColor = "transparent";
    }
})

menu_item.forEach((item)=>{
    item.addEventListener('click',()=>{
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active'); 
    })
})