/*=============== CHANGE BACKGROUND HEADER ===============*/

function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 50) header.classList.add('scroll_header')

    if(this.scrollY <= 50) header.classList.remove('scroll_header')
    
}

window.addEventListener('scroll',scrollHeader)


/*=============== SWIPER POPULAR ===============*/

var swiperPoular= new Swiper(".popular_container",{
    spaceBetween: 32,
    grabCursor:true,
    centeredSlides : true,
    slidesPerView :'auto',
    loop:true,
    navigation :{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    }
});


/*=============== VALUE ACCORDION ===============*/

const accordionItems = document.querySelectorAll('.value_accordion_item');

accordionItems.forEach((item)=>{
    const accordionHeader = item.querySelector('.value_accordion_header')

    accordionHeader.addEventListener('click', ()=>{
        const openItem = document.querySelector('.accordion_open')
        toggleItem(item);
        if(openItem && openItem!==item) toggleItem(openItem)
    })
})

const toggleItem = (item) =>{
    const accordionContent = item.querySelector('.value_accordion_content')
    if(item.classList.contains('accordion_open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion_open')
    }else{

    accordionContent.style.height = accordionContent.scrollHeight + 'px';
    item.classList.add('accordion_open');
    }
}

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop  = current.offsetTop - 58,
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId +']').classList.add('active_link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId +']').classList.remove('active_link')
        }
    })
}


window.addEventListener('scroll',scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 

function scrollUp(){
    const scroll_up = document.getElementById('scroll-up')
    if(this.scrollY >= 350) scroll_up.classList.add('show_scroll')
    else scroll_up.classList.remove('show_scroll')
}

window.addEventListener('scroll', scrollUp)


/*=============== DARK LIGHT THEME ===============*/ 

const themeButton = document.getElementById('theme_button')
const darkTheme = 'dark_theme'
const iconTheme = 'bx-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark':'light';

const getCurrentIcon= () => document.body.classList.contains(iconTheme) ? 'bx bx-moon':'bx bx-sun'

if (selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'] (darkTheme)
themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add':'remove'](iconTheme)
}


themeButton.addEventListener('click', ()=>{
document.body.classList.toggle(darkTheme)
themeButton.classList.toggle(iconTheme)

localStorage.setItem('selected-theme', getCurrentTheme())
localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
