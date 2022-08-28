//Box shadow
    var navBar = document.getElementById('navBar');
    window.onscroll = function(){
        if(window.scrollY > 56){
            navBar.classList.add('scrolled');
        }else{
            navBar.classList.remove('scrolled');
        }
    }

//Menu 
var buttons = document.getElementsByClassName('openClose');
var items = document.getElementsByClassName('closeOnly');
var navMenu = document.getElementById('menu2');

// for (var openClose of buttons){
// openClose.addEventListener("click", function(){
//     if(navMenu.classList.contains('show')){
//         closeNav();
//     }else{
//         openNav();
//     }
// });
// }

for (var closeOnly of items){
    openClose.addEventListener('click', function(){
        closeNav();
    });
    }

function openNav(){
    navMenu.classList.add('show');
    let a = document.getElementsByTagName('body');
    console.log(a);
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
}

function closeNav(){
    navMenu.classList.remove('show');
    document.getElementsByTagName('body')[0].style.overflow = 'visible';
}


//Swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });