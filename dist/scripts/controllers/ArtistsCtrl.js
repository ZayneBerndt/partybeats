(function() {
    function ArtistsCtrl() {


  function LoopTest() {
var i=0;
var stop=5;
for (i=0;i<5;i++) {  
 var v = document.createElement('div');
 v.type="button";
 v.value="Button " +i;
 document.getElementsByClassName('button').appendChild(v);
}
 }
    }
        




angular
    .module('partybeats')
    .controller('ArtistsCtrl', [ArtistsCtrl]);



})();









