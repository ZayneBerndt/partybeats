(function() {
    function SigninCtrl($scope, $firebaseAuth) {
    
   //Get Elements 
    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnSignUp = document.getElementById('btnSignUp');
    const btnLogout = document.getElementById('btnLogout');

   //Add login event
    btnLogin.addEventListener('click', e => {
   
   //Get email and pass
    const email = txtEmail.value;
    const pass = txtPassword.value;
     window.location = '/user';
    
    //Sign in 
    const promise = firebase.auth().signInWithEmailAndPassword(email, pass);
        
  
      
//  promise.catch(e => console.log(e.message));
    
    });
        
    //Sign out 
        
   btnLogout.addEventListener('click', e => {
    firebase.auth().signOut().then(function() {
        console.log('Signed Out');
    }, function(error) {
    console.error('Sign Out Error', error);
    })
})

  
    
    //Signup event
    btnSignUp.addEventListener('click', e=> {
        //Get email and pass
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const promise = firebase.auth().createUserWithEmailAndPassword(email, pass);
    });
    
   //Add a realtime listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
    console.log(firebaseUser);
    } else {
    console.log('not logged in');
    }
});
}

         //Initialize Firebase
  var config = {
    apiKey: "AIzaSyDV7tCzqsqAxlzt1HOauF9Bxe1_G1CdKyQ",
    authDomain: "partybeats-cc743.firebaseapp.com",
    databaseURL: "https://partybeats-cc743.firebaseio.com",
    projectId: "partybeats-cc743",
    storageBucket: "partybeats-cc743.appspot.com",
    messagingSenderId: "976147237449"
  };
    firebase.initializeApp(config);
        

<<<<<<< HEAD
  }
=======
>>>>>>> FirebaseAuth

    
angular
    .module('partybeats')
    .controller('SigninCtrl', ['$firebaseAuth', SigninCtrl]);



})();

















//(function() {
//  function SigninCtrl( $state ) {
//
//
//  
//    function toggleSignIn() {
//      if (firebase.auth().currentUser) {
//      
//       firebase.auth().signOut();
//     } else {
//        var email = document.getElementById('email').value;
//        var password = document.getElementById('password').value;
//        if (email.length < 4) {
//          alert('Please enter an email address.');
//          return;
//        }
//        if (password.length < 4) {
//          alert('Please enter a password.');
//          return;
//        }
//        // Sign in with email and pass.
//        // [START authwithemail]
//        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
//          // Handle Errors here.
//          var errorCode = error.code;
//          var errorMessage = error.message;
//          // [START_EXCLUDE]
//          if (errorCode === 'auth/wrong-password') {
//            alert('Wrong password.');
//          } else {
//            alert(errorMessage);
//          }
//          console.log(error);
//          document.getElementById('quickstart-sign-in').disabled = false;
//          // [END_EXCLUDE]
//        });
//        // [END authwithemail]
//      }
//      document.getElementById('quickstart-sign-in').disabled = true;
//    }
//    /**
//     * Handles the sign up button press.
//     */
//    function handleSignUp() {
//      var email = document.getElementById('email').value;
//      var password = document.getElementById('password').value;
//      if (email.length < 4) {
//        alert('Please enter an email address.');
//        return;
//      }
//      if (password.length < 4) {
//        alert('Please enter a password.');
//        return;
//      }
//      // Sign in with email and pass.
//      // [START createwithemail]
//      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
//        // Handle Errors here.
//        var errorCode = error.code;
//        var errorMessage = error.message;
//        // [START_EXCLUDE]
//        if (errorCode == 'auth/weak-password') {
//          alert('The password is too weak.');
//        } else {
//          alert(errorMessage);
//        }
//        console.log(error);
//        // [END_EXCLUDE]
//      });
//      // [END createwithemail]
//    }
//    /**
//     * Sends an email verification to the user.
//     */
//    function sendEmailVerification() {
//      // [START sendemailverification]
//      firebase.auth().currentUser.sendEmailVerification().then(function() {
//        // Email Verification sent!
//        // [START_EXCLUDE]
//        alert('Email Verification Sent!');
//        // [END_EXCLUDE]
//      });
//      // [END sendemailverification]
//    }
//    function sendPasswordReset() {
//      var email = document.getElementById('email').value;
//      // [START sendpasswordemail]
//      firebase.auth().sendPasswordResetEmail(email).then(function() {
//        // Password Reset Email Sent!
//        // [START_EXCLUDE]
//        alert('Password Reset Email Sent!');
//        // [END_EXCLUDE]
//      }).catch(function(error) {
//        // Handle Errors here.
//        var errorCode = error.code;
//        var errorMessage = error.message;
//        // [START_EXCLUDE]
//        if (errorCode == 'auth/invalid-email') {
//          alert(errorMessage);
//        } else if (errorCode == 'auth/user-not-found') {
//          alert(errorMessage);
//        }
//        console.log(error);
//        // [END_EXCLUDE]
//      });
//      // [END sendpasswordemail];
//    }
//    /**
//     * initApp handles setting up UI event listeners and registering Firebase auth listeners:
//     *  - firebase.auth().onAuthStateChanged: This listener is called when the user is signed in or
//     *    out, and that is where we update the UI.
//     */
//    function initApp() {
//      // Listening for auth state changes.
//      // [START authstatelistener]
//      firebase.auth().onAuthStateChanged(function(user) {
//        // [START_EXCLUDE silent]
//        document.getElementById('quickstart-verify-email').disabled = true;
//        // [END_EXCLUDE]
//        if (user) {
//          // User is signed in.
//          var displayName = user.displayName;
//          var email = user.email;
//          var emailVerified = user.emailVerified;
//          var photoURL = user.photoURL;
//          var isAnonymous = user.isAnonymous;
//          var uid = user.uid;
//          var providerData = user.providerData;
//          // [START_EXCLUDE]
//          document.getElementById('quickstart-sign-in-status').textContent = 'Signed in';
//          document.getElementById('quickstart-sign-in').textContent = 'Sign out';
//          document.getElementById('quickstart-account-details').textContent = JSON.stringify(user, null, '  ');
//          if (!emailVerified) {
//            document.getElementById('quickstart-verify-email').disabled = false;
//          }
//          // [END_EXCLUDE]
//          } else {
//              
//              // User is signed out.
//          // [START_EXCLUDE]
//          document.getElementById('quickstart-sign-in-status').textContent = 'Signed out';
//          document.getElementById('quickstart-sign-in').textContent = 'Sign in';
//          document.getElementById('quickstart-account-details').textContent = 'null';
//          // [END_EXCLUDE]
//        }
//        // [START_EXCLUDE silent]
//        document.getElementById('quickstart-sign-in').disabled = false;
//        // [END_EXCLUDE]
//      });
//      // [END authstatelistener]
//      document.getElementById('quickstart-sign-in').addEventListener('click', toggleSignIn, false);
//      document.getElementById('quickstart-sign-up').addEventListener('click', handleSignUp, false);
//      document.getElementById('quickstart-verify-email').addEventListener('click', sendEmailVerification, false);
//      document.getElementById('quickstart-password-reset').addEventListener('click', sendPasswordReset, false);
//    }
//    window.onload = function() {
//      initApp();
//    };
//     };
//  
//
//      
//      
//
//
//  // Initialize Firebase
//  var config = {
//    apiKey: "AIzaSyDV7tCzqsqAxlzt1HOauF9Bxe1_G1CdKyQ",
//    authDomain: "partybeats-cc743.firebaseapp.com",
//    databaseURL: "https://partybeats-cc743.firebaseio.com",
//    projectId: "partybeats-cc743",
//    storageBucket: "partybeats-cc743.appspot.com",
//    messagingSenderId: "976147237449"
//  };
//  firebase.initializeApp(config);
//
//         
//   
//  
//
//  angular
//    .module('partybeats')
//    .controller('SigninCtrl');
//})();