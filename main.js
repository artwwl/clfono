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

  var body = document.querySelector('body');
  var darkModeToggle = document.querySelector('.dark-mode-toggle');

  darkModeToggle.addEventListener('click', () => {
    if (body.classList.contains('bright')){
        document.documentElement.style.setProperty('--body-color', '#292929');
        document.documentElement.style.setProperty('--base-color', 'rgb(235, 181, 4)');
        document.documentElement.style.setProperty('--title-font-color', '#f1f1f1');
        document.documentElement.style.setProperty('--subtitle-font-color', '#dddddd');
        document.documentElement.style.setProperty('--border-color', 'var(--base-color)');
        document.documentElement.style.setProperty('--box-shadow-color', 'rgba(0, 0, 0, 0.8)');
        document.documentElement.style.setProperty('--scroll-color', 'rgb(253, 194, 0)');
        
        body.classList.remove('bright');
        body.classList.add('dark');
    }else{
        document.documentElement.style.setProperty('--body-color', '#F9F9F9');
        document.documentElement.style.setProperty('--base-color', 'rgb(253, 194, 0)');
        document.documentElement.style.setProperty('--title-font-color', '#241f0f');
        document.documentElement.style.setProperty('--subtitle-font-color', '#767676');
        document.documentElement.style.setProperty('--border-color', '#E4E4E4');
        document.documentElement.style.setProperty('--box-shadow-color', 'rgba(0, 0, 0, 0.158)');
        document.documentElement.style.setProperty('--scroll-color', '#767676');
        
        body.classList.remove('dark');
        body.classList.add('bright');
    }
    
  })