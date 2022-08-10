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


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/
