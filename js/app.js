var i = 0;
var j = 0;
var images = [];
var efects = [];
var time = 4000;

// Lista de Imagenes
images[0] = 'img/001.jpg';
images[1] = 'img/002.jpg';
images[2] = 'img/003.jpg';
images[3] = 'img/004.jpg';
images[4] = 'img/005.jpg';

// Cambiar Imagen
function cambiarImg() {
    document.slide.src = images[i];

    if(i < images.length -1){
        i++;
    } else {
        i = 0;
    }

    setTimeout("cambiarImg()", time);
}

// Iniciar al abrir la pagina
window.onload = cambiarImg;