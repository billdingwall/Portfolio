

// conditionally load livereload based on host

var hostName = window.location.hostname;

if (hostName === 'localhost') {
  var livereloadScript = document.createElement('script');
  livereloadScript.setAttribute('src','http://localhost:35729/livereload.js');
  document.head.appendChild(livereloadScript);
}
