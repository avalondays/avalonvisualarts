$('.menu-button').click(function () {

    $('nav').toggleClass('open');

});


var slider = tns({
    container: '.my-slider',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    mouseDrag: true,
    controls: false
});