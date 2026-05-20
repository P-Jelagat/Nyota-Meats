const slides = document.querySelectorAll('.slideHome img');
let currentSlide = 0;

const slideHome = document.querySelector('.slideHome');


function showSlide(index){
    slides.forEach((slide) => {
        slide.classList.remove('active');
    })

    slides[index].classList.add('active');
}

function nextSlide(){
    currentSlide++;
    if(currentSlide >= slides.length){
        currentSlide = 0;
    }
    showSlide(currentSlide);
}

let slideInterval = setInterval(nextSlide, 5000);


slideHome.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
})

slideHome.addEventListener('mouseleave', () =>{
    slideInterval = setInterval(nextSlide, 5000);
})
