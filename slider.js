const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
let counter = 0;
const slideWidth = slides[0].clientWidth;

function nextSlide() {
            counter++;
            if (counter >= slides.length) {
                counter = 0;
            }
            slider.style.transform = `translateX(-${counter * slideWidth}px)`;
        }
function prevSlide() {
            counter--;
            if (counter < 0) {
                counter = slides.length - 1;
            }
            slider.style.transform = `translateX(-${counter * slideWidth}px)`;
        }
setInterval(nextSlide, 5000);
