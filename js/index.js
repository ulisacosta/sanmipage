const contacto = document.getElementById("contacto");
const sectionContacto = document.getElementById("sectionContacto");

const inicio = document.getElementById("inicio");
const fraseInicio = document.querySelector(".fraseInicio");
const imgLogo = document.querySelector(".imgLogo");

const imgInicio = document.getElementById("imgInicio");

const companias = document.getElementById("companias");
const sectionCompanias = document.getElementById("sectionCompanias");
const imgCompanias = document.querySelector(".imgCompanias");

const watchMediaScroll = window.matchMedia("(max-width: 1300px)");

/* GUARDAMOS EL TITULO ACTUAL */
let previousTitle = document.title;

/* Hacemos que el titulo de la pestaña cambie cuando cambiamos de ventana */
window.addEventListener("blur", () => {
  previousTitle = document.title;
  document.title = "Protegemos lo que tanto te costo tener";
});

/* CUANDO VOLVEMOS A LA PESTAÑA CAMBIA AL TITULO ORIGINAL */
window.addEventListener("focus", () => {
  document.title = previousTitle;
});

/* AL HACER CLICK EN EL BOTON INICIO DEL NAVBAR AGREGA LAS ANIMACIONES */
inicio.addEventListener("click", () => {
  fraseInicio.classList.add("animate__animated");
  fraseInicio.classList.add("animate__fadeInRight");
  imgLogo.classList.add("animate__animated");
  imgLogo.classList.add("animate__fadeInLeft");
});

/* AL TERMINAR LA ANIMACION RESETEA LAS CLASES */
fraseInicio.addEventListener("animationend", () => {
  fraseInicio.classList.remove("animate__animated");
  fraseInicio.classList.remove("animate__fadeInRight");
});
imgLogo.addEventListener("animationend", () => {
  imgLogo.classList.remove("animate__animated");
  imgLogo.classList.remove("animate__fadeInLeft");
});

imgInicio.addEventListener("click", () => {
  sectionInicio.classList.add("animate__animated");
  sectionInicio.classList.add("animate__fadeInLeft");
});

contacto.addEventListener("click", () => {
  sectionContacto.classList.add("animate__animated");
  sectionContacto.classList.add("animate__zoomInDown");
});

sectionContacto.addEventListener("animationend", () => {
  sectionContacto.classList.remove("animate__animated");
  sectionContacto.classList.remove("animate__zoomInDown");
});

/* Los efectos de scroll cambian cuando la pantalla se achica */
watchMediaScroll.addEventListener("change", (e) => {
  let beneficiosElements = document.querySelectorAll(".beneficios");
  let splide_companias = document.querySelector(".splide_companias");
  let divTitleCompanias = document.querySelector(".divTitleCompanias");
  if (e.matches) {
    beneficiosElements.forEach(function (element) {
      element.setAttribute("data-aos", "fade-up");
      element.setAttribute("data-aos-easing", "ease-in-sine");
    });
    splide_companias.setAttribute("data-aos", "fade-right");
    divTitleCompanias.setAttribute("data-aos", "fade-right");
  } else {
    splide_companias.setAttribute("data-aos", "fade-left");

    beneficiosElements.forEach(function (element) {
      let fadeDirections = [
        "fade-right",
        "fade-down",
        "fade-left",
        "fade-right",
        "fade-up",
        "fade-left",
      ];
      let fadeEasings = [
        "ease-in-sine",
        "ease-in-sine",
        "ease-in-sine",
        "ease-in-sine",
        "ease-in-sine",
        "ease-in-sine",
      ];

      element.setAttribute("data-aos", fadeDirections[index]);
      element.setAttribute("data-aos-easing", fadeEasings[index]);
    });
  }
  if (typeof AOS !== "undefined") {
    AOS.refresh(); // Refrescar AOS para aplicar los cambios
  } else {
    AOS.init(); // Inicializar AOS si aún no se ha hecho
  }
});
