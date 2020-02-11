
// HEADER SCRIPT
let header = document.querySelector('header#header');

window.onscroll = function () {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add('scrolled')
    } else {
        header.classList.remove('scrolled')
    }
}

// INIT SPLITTING SCRIPT

Splitting();

// HOME SLIDER SCRIPT
$(".home-slider").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    dots: true,
    pauseOnDotsHover: true,
    cssEase: 'ease-in-out',
    arrows: false,
    rtl: true
});
$(".owl-stage").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: false,
    dots: false,
    pauseOnDotsHover: true,
    cssEase: 'linear',
    rtl: true,
    prevArrow: ".owl-prev",
    nextArrow: ".owl-next",
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
});

// GSAP STUFF
    var tl = new gsap.timeline(); 
    
    tl.to('.loading', { duration: 1, y: "-100%", delay: 3, ease: 'power4' })
    .to('#block-reveal', { duration: 1, y: "-100%", ease: 'power4' }, ('-=.5'))
    .from('section.services', { duration: 1, x: "-100%", ease: 'power4' })
    .from(['.services__count .char', '.services__heading .char'], {
        duration: 1, x: 50, autoAlpha: 0, stagger: .02, ease: 'power4'
    })
    

// UNITS TYPE SCRIPT
    $('#featured-content').slick({
        dots: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        rtl: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
            }
        }]
    });

