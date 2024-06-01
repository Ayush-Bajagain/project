const l = document.querySelector('.left');
const r = document.querySelector('.right');
const s = document.querySelector('.slider');
const image = document.querySelectorAll('.images')

let slideNumber = 1;
const length = image.length;



const nextSlide = ()=>{
    s.style.transform = `translateX(-${slideNumber*900}px)`;
    slideNumber++;
}
const prevSlide = ()=>{
    s.style.transform = `translateX(-${(slideNumber-2)*900}px)`;
    slideNumber--;
}

const getFirstSlide = ()=>{
    s.style.transform = `translateX(0vw)`;
    slideNumber = 1;
}
const getLastSlide = ()=>{
    s.style.transform = `translateX(-${(length-1)*900}px)`;
    slideNumber = length;
}




r.addEventListener('click', ()=>{
    if(slideNumber < length){
        nextSlide();
    }
    else{
       getFirstSlide();
    };

});

l.addEventListener('click', ()=>{
    if(slideNumber < 1){
        prevSlide();
    }
    else{
       getLastSlide();
    };

});