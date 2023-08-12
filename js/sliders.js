const splide = document.querySelector(".splide");

/* const splideCompañias = new Splide(splide, {
    type   : 'loop',
    drag   : 'free',
    focus  : 'center',
   
}); */

new Splide("#image-carousel", {
  type    : 'loop',
  autoplay: 'play',
/*   perPage: 6,
perMove:1, */ 
  gap:20,
  arrows: false,
  autoHeight: true,
  autoWidth: true,
  pauseOnHover: true,
  pagination: true,
  rewind: true,
  speed:105000,
  interval:1500,
  lazyLoad:'nearby',
 autoScroll: {
    speed: 5,
  },
}).mount();

/* splideCompañias.mount( ) */
