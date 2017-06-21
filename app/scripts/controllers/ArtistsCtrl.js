(function() {
    function ArtistsCtrl() {
// Script to open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}
 
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}
    
//onclick get saved DJ user profile for view from Database. 
//    function onClick(element){
//        document.getElementById("UserImage").src = element.src;
//        open location DJ page } 

       

angular
    .module('partybeats')
    .controller('ArtistsCtrl', [ArtistsCtrl]);



})();