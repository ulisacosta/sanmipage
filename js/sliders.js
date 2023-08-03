const splide = document.querySelector('.splide')

/* const splideCompañias = new Splide(splide, {
    type   : 'loop',
    drag   : 'free',
    focus  : 'center',
   
}); */


    new Splide( '#image-carousel',{
        type   : 'loop',
        drag   : 'free',
        focus  : 'center',
        perPage: 1,
        autoScroll: {
          speed: 1,
        },
 
     
    }).mount();

/* splideCompañias.mount( ) */