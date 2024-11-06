let slideIndex = 0;
let slides = document.querySelectorAll('.slide');
let dots = document.querySelectorAll('.dot');


let slideDurations = [20000, 20000, 20000, 20000, 20000, 20000, 20000];


function showSlides(n) {
    slides.forEach((slide) => slide.style.display = 'none');
    dots.forEach((dot) => dot.classList.remove('active'));

   
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }

    slides[slideIndex].style.display = 'block';
    dots[slideIndex].classList.add('active');

    
    setTimeout(() => {
        slideIndex++;
        showSlides(slideIndex);
    }, slideDurations[slideIndex]);
}


showSlides(slideIndex);


function nextSlide() {
    slideIndex++;
    if (slideIndex >= slides.length) { slideIndex = 0; }
    showSlides(slideIndex);
}


function prevSlide() {
    slideIndex--;
    if (slideIndex < 0) { slideIndex = slides.length - 1; }
    showSlides(slideIndex);
}


function currentSlide(n) {
    slideIndex = n;
    showSlides(slideIndex);
}


$('.owl-carousel').owlCarousel({
    rtl:true,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


document.getElementById('tourism').addEventListener('click', function() {
    document.getElementById('scroll1').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('hotels').addEventListener('click', function() {
    document.getElementById('scroll2').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('destination').addEventListener('click', function() {
    document.getElementById('scroll3').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('products').addEventListener('click', function() {
    document.getElementById('scroll4').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('history').addEventListener('click', function() {
    document.getElementById('scroll5').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('nature').addEventListener('click', function() {
    document.getElementById('scroll6').scrollIntoView({ behavior: 'smooth' });
});


document.querySelectorAll('.card img').forEach((img) => {
    img.addEventListener('click', function() {
        alert('More information coming soon');
    });
});


