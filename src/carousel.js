const carousel = document.querySelector('.carousel');
const carouselImages = document.querySelector('.images');
const images = Array.from(carouselImages.querySelectorAll('img'));
const numOfImages = images.length;
const dots = document.querySelector('.dots');

for (let image in images) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.setAttribute('image', +image + 1);
    dots.appendChild(dot);
}

let currentLeft = 0;
let totalLeft = (numOfImages - 1) * -640;
let currentImageNumber = currentLeft/640 * -1

function advanceImage() {
    if (currentLeft > totalLeft) {
        dots.children[currentImageNumber].classList.toggle('selected');
        currentLeft -= 640;
    } else {
        dots.children[currentImageNumber].classList.toggle('selected');
        currentLeft = 0;
    }
    carouselImages.style.left = currentLeft.toString() + 'px';
    currentImageNumber = currentLeft/640 * -1;
    dots.children[currentImageNumber].classList.toggle('selected');
}

dots.children[currentImageNumber].classList.toggle('selected');

carousel.addEventListener('click', (button => {
    if (button.target.classList.value === 'right') {
        advanceImage();
    } else if (button.target.classList.value === 'left'
        && currentLeft < 0) {
        currentLeft += 640;
        carouselImages.style.left = currentLeft.toString() + 'px';
        dots.children[currentImageNumber].classList.toggle('selected');
        currentImageNumber = currentLeft/640 * -1;
        dots.children[currentImageNumber].classList.toggle('selected');
    } else if (button.target.classList.value === 'left'
        && !(currentLeft < 0)) {
        currentLeft = (numOfImages - 1) * -640;
        carouselImages.style.left = currentLeft.toString() + 'px';
        dots.children[currentImageNumber].classList.toggle('selected');
        currentImageNumber = currentLeft/640 * -1;
        dots.children[currentImageNumber].classList.toggle('selected');
    } else if (button.target.classList.value === 'dot') {
        dots.children[currentImageNumber].classList.toggle('selected');
        currentLeft = ((+button.target.getAttribute('image') - 1) * 640) * -1;
        carouselImages.style.left = currentLeft.toString() + 'px';
        currentImageNumber = currentLeft/640 * -1;
        dots.children[currentImageNumber].classList.toggle('selected');
    }
}))

setInterval(advanceImage, 5000);