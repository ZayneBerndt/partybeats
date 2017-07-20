(function() {
    function SigninCtrl($scope) {
    
//        //Get Elements 
//const txtEmail = document.getElementById('txtEmail');
//const txtPassword = document.getElementById('txtPassword');
//const btnLogin = document.getElementById('btnLogin');
//const btnSignUp = document.getElementById('btnSignUp');
//const btnLogout = document.getElementById('btnLogout');
//  
//        //Add login event
//btnLogin.addEventListener('click', e => {
//        //Get email and pass
//const email = txtEmail.value;
//const pass = txtPassword.value;
//        //Sign in 
//firebase.auth().signInWithEmailAndPassword(email, pass);
//        
//var user = firebase.auth().currentUser;
//    if (user != null) {
//    window.location = "/dj-signup"
//    }
//        });
//        
//    
// //Sign out      
//   btnLogout.addEventListener('click', e => {
//    firebase.auth().signOut().then(function() {
//        console.log('Signed Out');
//         window.location = "/signin"
//        
//    }, function(error) {
//    console.error('Sign Out Error', error);
//    })
//})
//   
//   
//   //Validate User 
//   function ValidateUser() {
//   var pword= new RegExp (/^[a-zA-Z0-9]{4,100}$/)
//   if (pword.test(password)) { 
//      return true
//   }
//   else {
//      alert("Incorrect Password or Username")
//   }
//   var email= new RegExp (/^[A-Za-z0-9_.]{2,100}+@[A-Za-z0-9.-]{2,100}+\.[A-Za-z]{2,100}$/)
//   if (email.test(EmailAddress)) {
//      return true
//   }
//   else {
//      alert("Incorrect Password or Username")
//   }
//}
//
//  
//    
//    //Signup event
//    btnSignUp.addEventListener('click', e=> {
//        //Get email and pass
//    const email = txtEmail.value;
//    const pass = txtPassword.value;
//    const promise = firebase.auth().createUserWithEmailAndPassword(email, pass);
//    
//    });
//    
//   //Add a realtime listener
//    firebase.auth().onAuthStateChanged(firebaseUser => {
//    if(firebaseUser) {
//    console.log(firebaseUser);
//    } else {
//    console.log('not logged in');
//    }
//});
//}
//
//         //Initialize Firebase
//  var config = {
//    apiKey: "AIzaSyDV7tCzqsqAxlzt1HOauF9Bxe1_G1CdKyQ",
//    authDomain: "partybeats-cc743.firebaseapp.com",
//    databaseURL: "https://partybeats-cc743.firebaseio.com",
//    projectId: "partybeats-cc743",
//    storageBucket: "partybeats-cc743.appspot.com",
//    messagingSenderId: "976147237449"
//  };
//    firebase.initializeApp(config);
        
    }

angular
    .module('partybeats')
    .controller('SigninCtrl', [ SigninCtrl]);



})();

















