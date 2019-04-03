var i = 0;
var images = [];
var time = 6000;

// Lista de Imagenes
images[0] = 'img/slider1.jpg';
images[1] = 'img/slider2.jpg';
images[2] = 'img/slider3.jpg';
images[3] = 'img/slider4.jpg';

// Cambiar Imagen
function cambiarImg() {
    document.slide.src = images[i];
    animateCSS('.prueba', 'zoomIn');

    if(i < images.length -1){
        i++;
    } else {
        i = 0;
    }
    setTimeout("cambiarImg()", time);
}

function animateCSS(element, animationName, callback) {
    const node = document.querySelector(element)
    node.classList.add('animated', animationName)

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
}

// Iniciar al abrir la pagina
window.onload = cambiarImg;