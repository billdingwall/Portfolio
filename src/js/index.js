// conditionally load livereload & GA based on host

var hostName = window.location.hostname;

if (hostName === 'williamdingwall.com') {
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-3TT3B4FD2T');
}

if (hostName === 'localhost') {
  var livereloadScript = document.createElement('script');
  livereloadScript.setAttribute('src','http://localhost:35729/livereload.js');
  document.head.appendChild(livereloadScript);
}

window.onload = function(){
  // run after page load 

  var splide = new Splide( '.splide', {
                type    : 'loop',
                autoplay: 'play',
                interval: 10000
              } );

  splide.on( 'autoplay:playing', function ( rate ) {
    console.log( rate ); // 0-1
  } );

  splide.mount();

};
