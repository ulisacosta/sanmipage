const contacto = document.getElementById('contacto');
const sectionContacto = document.getElementById('sectionContacto')

const inicio = document.getElementById('inicio');
const sectionInicio = document.getElementById('sectionInicio')

const imgInicio = document.getElementById('imgInicio');

const companias = document.getElementById('companias')
const sectionCompanias = document.getElementById('sectionCompanias')
const imgCompanias = document.querySelector('.imgCompanias');


/* GUARDAMOS EL TITULO ACTUAL */
let previousTitle = document.title;

/* Hacemos que el titulo de la pestaña cambie cuando cambiamos de ventana */
window.addEventListener('blur', ()=>{
    previousTitle = document.title;
    document.title = 'Protegemos lo que tanto te costo tener'
})

/* CUANDO VOLVEMOS A LA PESTAÑA CAMBIA AL TITULO ORIGINAL */
window.addEventListener('focus',()=>{
    document.title = previousTitle
})

/* AL HACER CLICK EN EL BOTON INICIO DEL NAVBAR AGREGA LAS ANIMACIONES */
inicio.addEventListener('click',()=>{
    sectionInicio.classList.add('animate__animated');
    sectionInicio.classList.add('animate__fadeInLeft');  
})

/* AL TERMINAR LA ANIMACION RESETEA LAS CLASES */
sectionInicio.addEventListener('animationend',()=>{
    sectionInicio.classList.remove('animate__animated');
    sectionInicio.classList.remove('animate__fadeInLeft');
})

imgInicio.addEventListener('click',()=>{
    sectionInicio.classList.add('animate__animated');
    sectionInicio.classList.add('animate__fadeInLeft');
})


contacto.addEventListener('click',()=>{
    sectionContacto.classList.add('animate__animated');
    sectionContacto.classList.add('animate__zoomInDown');
})

sectionContacto.addEventListener('animationend',()=>{
    sectionContacto.classList.remove('animate__animated');
    sectionContacto.classList.remove('animate__zoomInDown');
})
 

companias.addEventListener('click',()=>{
  imgCompanias.classList.add('animate__animated');
  imgCompanias.classList.add('animate__backInLeft');  
})

imgCompanias.addEventListener('animationend',()=>{
    imgCompanias.classList.remove('animate__animated');
    imgCompanias.classList.remove('animate__backInLeft');
})
 