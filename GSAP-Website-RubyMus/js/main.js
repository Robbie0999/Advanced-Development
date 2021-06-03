/* OPEN MENU */
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', () =>{
            nav.classList.toggle('show-menu')
        })
    }
}

showMenu('nav-toggle','nav-menu')

/* DICHT MENU ONCLICK RESPONSIVE */
const navLink = document.querySelectorAll('.nav__link')

function linkaction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkaction))

/* SCROLLEN BIJ NIEUWE SECTIE + HUIDIGE SECTIE AANWIJZING*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset
    
    sections.forEach(current =>{
        const sectionHeight = current.offsetheight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }
        else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

/* VERANDERING HEADER BACKGROUND BIJ HUIDIGE SECTIE */
function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 750) header.classList.add('scroll-header'); else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader)

/* SCROLL TOP LATEN ZIEN */
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top')
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollTop)

/* GSAP ANIMATIE */
gsap.from('.nav__item', {opacity: 0, duration: 2, delay: 1, y: 25, ease:'expo.out', stagger: .2})

/* AOS */
    AOS.init({
        easing: 'ease',
        duration: 1800
    });

/* CURSOR */
const cursor = document.querySelector('.cursor')

document.addEventListener('mousemove', e =>{
    cursor.setAttribute("style", "top: "+(e.pageY -10)+"px; left: "+(e.pageX -10)+"px;")
})

document.addEventListener('click', () =>{
    cursor.classList.add("expand");
    setTimeout(() =>{
        cursor.classList.remove("expand");
    }, 500)
})

/* IMG SLIDER */
var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;

    if(counter > 4){
        counter = 1;
    }
}, 4000)
