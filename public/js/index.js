// conditionally load GA based on host

var hostName = window.location.hostname;

if (hostName === 'williamdingwall.com') {
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-KH99855ZFW');
}

window.onload = function(){

  var splides = document.querySelectorAll('.splide');
  
  if (splides.length > 0) {

    var splide = new Splide( '.splide', {
      type    : 'loop',
      autoplay: 'play',
      interval: 10000
    } );

    splide.mount();

  }

};
