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
const getCurrentIcon= () => themeButton.classList.contains(iconTheme) ? 'bx-sun':'bx-moon'

if (selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'] (darkTheme)

    if (document.body.classList.contains(darkTheme)){
    themeButton.classList.add('bx-sun')
    themeButton.classList.add('bx-moon')

}
}


themeButton.addEventListener('click', ()=>{
document.body.classList.toggle(darkTheme)
themeButton.classList.toggle(iconTheme)

localStorage.setItem('selected-theme', getCurrentTheme())
localStorage.setItem('selected-icon', getCurrentIcon())
})






/*=============== SCROLL REVEAL ANIMATION ===============*/


const sr = ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:400,
    reset:true

})

sr.reveal('.home_title, .popular_container, .subscribe_container, .footer_container')
sr.reveal('.home_description, .footer_info', {delay:500})
sr.reveal('.home_search', {delay:600})
sr.reveal('.home_value', {delay:700})
sr.reveal('.home_images', {delay:800, origin:'bottom'})
sr.reveal('.logos_img',{interval:100})
sr.reveal('.value_images, .contact_content',{origin:'left'})
sr.reveal('.value_content, .contact_images',{origin:'right'})



