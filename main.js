
/* TOGGLE BUTTON */
const navMenu = document.getElementById("nav-menu")
const navLink = document.querySelectorAll(".nav-link")
const hamburger = document.getElementById("hamburger")

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]")
    hamburger.classList.toggle('ri-close-large-line')
})

navLink.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.toggle("left-[0]")
        hamburger.classList.toggle('ri-close-large-line')
    })
})

/* SHOW SCROLL UP */
const scrollUp = () => {
    const scrollUpBtn = document.getElementById("scroll-up")

    if(this.scrollY >=250) {
        scrollUpBtn.classList.remove("hidden")
    } else {
        scrollUpBtn.classList.add("hidden")
    }
}

window.addEventListener("scroll", scrollUp)

/* CHANGE BACKGROUND HEADER */
const scrollHeader = () => {
    const header = document.getElementById("navbar")

    if(this.scrollY >=50) {
        header.classList.add("border-b", "border-orange-400")
        scrollUpBtn.classList.add("-bottom-1/2")
    } else {
        header.classList.remove("border-b", "border-orange-400")
    }
}

window.addEventListener("scroll", scrollHeader)

/* SWIPER SLIDER */
const swiper = new Swiper('.swiper', {
    // Optional parameters
    speed: 400,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    grabCursor: true,
    breakpoints: {
        640: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }
  });
  