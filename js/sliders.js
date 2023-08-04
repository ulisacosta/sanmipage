const splide = document.querySelector(".splide");

/* const splideCompañias = new Splide(splide, {
    type   : 'loop',
    drag   : 'free',
    focus  : 'center',
   
}); */

new Splide("#image-carousel", {
  type    : 'loop',
  autoplay: 'play',
  perPage : 1,
  gap:5,
  arrows: false,
  autoHeight: true,
  autoWidth: true,
  autoplay: true,
  pauseOnHover: true,
  pagination: false,
  rewind: true,
  speed:1500,
 interval:1000
}).mount();

/* splideCompañias.mount( ) */
