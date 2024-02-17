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

document.location.reload(true)

 // Remove the .html extension from the URL
 function removeHtmlExtension() {
    var currentUrl = window.location.href;
    if (currentUrl.substr(-5) === '.html') {
      var newUrl = currentUrl.substr(0, currentUrl.length - 5);
      window.history.replaceState({}, document.title, newUrl);
    }
  }

  // Call the function when the page loads
  window.onload = function() {
    removeHtmlExtension();
  };