(function() {
    function DjSignupCtrl($scope) {

//Ref to realtime database
var database = firebase.database();

//Write to database
function writeDjData(bandId, name, slogan, imageUrl) {
  firebase.database().ref('bands/' + bandId).set({
    bandname: name,
    slogan: slogan,
    profile_picture : imageUrl
  });
}

btnLogout.addEventListener('click', e => {
    firebase.auth().signOut().then(function() {
        console.log('Signed Out');
         window.location = "/signin"
        
    }, function(error) {
    console.error('Sign Out Error', error);
    })
})

}
angular
    .module('partybeats')
    .controller('DjSignupCtrl', [DjSignupCtrl]);



})();




