/*!
* Start Bootstrap - Creative v7.0.6 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});

const cuerpoDelDocumento = document.body;
cuerpoDelDocumento.onload = mostrarespiral;

function mostrarespiral(){
    var c = document.getElementById('micanvas');
    var cxt = c.getContext('2d');
    cxt.beginPath();
    var x=100; //Centro Espiral
    var y=70;  //Centro espiral
    var r=0;   //Radio incial
    var incre= 3; //incremento del radio
    var vueltas = 6; //vueltas
    for (var i=1;i<=vueltas;i++){
        cxt.arc(x,y,r=r+incre,                  0,radianes(90),false);
        cxt.arc(x,y-incre,r=r+incre,            radianes(90),radianes(180),false);
        cxt.arc(x+incre,y-incre,r=r+incre,      radianes(180),radianes(270),false);
        cxt.arc(x+incre,y,r=r+incre,            radianes(270),0,false);
    }

    cxt.lineWidth = 4; //ancho de la linea
    cxt.fillStyle = '#99CC00'; 
    cxt.fill(); //dibujar relleno
    cxt.strokeStyle = 'rgb(1,64,224)'; 
    cxt.stroke();//dibujar trazo
    
    cxt.beginPath();
    cxt.arc(330,30,15, radianes(0), radianes(360), false);
    cxt.removeAttributeNode(380,30);
    cxt.lineTo(400,30);
    cxt.lineWidth = 6;
    cxt.fillStyle = '#FFFF99'; 
    cxt.fill();
    cxt.stroke();

    
}
function radianes (grados){
var radianes = (Math.PI/180)*grados;
return radianes;

}


//cxt.fillStyle = "#F6EF03"; // Definimos el color para rellenar el rectangulo
//cxt.fillRect(10,80,50,100); // Dibuja un rectangulo relleno - fillRect(x,y,width,height)

//cxt.strokeStyle = "#0324F6"; // Definimos el color para pintar el borde
//cxt.strokeRect(20,32,100,50); // Dibuja el borde del rectangulo - strokeRect(x,y,width,height)

//cxt.fillRect(105,25,70,70); // Dibuja un rectangulo relleno del ultimo color definido con fillStyle

//cxt.fillStyle = "F6F203"; // Definimos otro color para rellenar el rectangulo
//cxt.fillRect(120,10,100,100); // Dibuja un rectangulo relleno

//cxt.clearRect(30,40,20,20); // Borra el contenido que hubiese e/n e//l area del rectangulo definido

//cxt.strokeRect(180,80,80,80); // Dibuja el borde del rectangulo de definido por ultima vez con strokeStyle.

//Etiqueta de aniimacion

const typed = new Typed('.typed', {
    strings: ['<i class="mascota" >Sistemas de control y versiones</i>',
              '<i class="mascota" >sus ventajas</i>',
              '<i class="mascota" >Ejemplos con Canvas</i>',
              '<i class="mascota" >e información interesante</i>'],
    stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});

