// Load webfonts in
var font = new FontFaceObserver( "et-book" )
font.load().then(function () {
  document.documentElement.className += " fonts-loaded";
});