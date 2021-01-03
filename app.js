const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

// Auto slider controls
const auto = true;
const intervalTime = 6000;
let slideInterval;


//Function that switches to the next slide

const nextSlide = () => {

    //Get the current slide
    const currentSlide = document.querySelector('.current');



    //Remove the current class from the current slide,so we can switch it to the next slide
    currentSlide.classList.remove('current');

    //Check if the current slide we're viewing has a slide after it
    if(currentSlide.nextElementSibling){
        currentSlide.nextElementSibling.classList.add('current');
    }

    else {
        slides[0].classList.add('current');
    }

    const content = document.querySelector('.slide.current .content');

    if(content.classList.contains('transparent')){
        content.classList.remove('transparent');
    }

    

}

//Function that switches to the previous slide

const prevSlide = () => {

    const currentSlide = document.querySelector('.current');

    currentSlide.classList.remove('current');

    if(currentSlide.previousElementSibling){
        currentSlide.previousElementSibling.classList.add('current');
    }

    else {
        slides[slides.length - 1].classList.add('current');
    }

    const content = document.querySelector('.slide.current .content');

    if(content.classList.contains('transparent')){
        content.classList.remove('transparent');
    }

}

//Configuring the next button

next.addEventListener('click', function () {

    //Switches to the next slide
    nextSlide();

    // The auto slider controls
    if(auto){
        //We reset our interval everytime we click, so that the slide doesn't two times (too fast)
        clearInterval(slideInterval);

        //We start the timer again, running nextSlide after the specified number of seconds in intervalTime
        slideInterval = setInterval(nextSlide, intervalTime);
    }

});


//Configuring the previous button

prev.addEventListener('click', function () {

    //Switches to the previous slide
    prevSlide();

    //The auto slider controls remain the same as above here
    if(auto){
        //We reset our interval everytime we click, so that the slide doesn't two times (too fast)
        clearInterval(slideInterval);

        //We start the timer again, running nextSlide after the specified number of seconds in intervalTime
        slideInterval = setInterval(nextSlide, intervalTime);
    }

});


//Auto slide controls

if(auto){
    slideInterval = setInterval(nextSlide, intervalTime);
}


//Click to see image functionality
document.body.addEventListener('mouseup', function (){

    const content = document.querySelector('.slide.current .content');

    content.classList.toggle('transparent');

    //We reset our interval everytime we click, so that the slide doesn't two times (too fast)
    clearInterval(slideInterval);

    //We start the timer again, running nextSlide after the specified number of seconds in intervalTime
    slideInterval = setInterval(nextSlide, intervalTime);
    
});