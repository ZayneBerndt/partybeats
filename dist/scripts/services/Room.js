(function() {
function Room ($firebaseArray) {
    
    var Room = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
    
    Room.getRooms = function() {
            return { all: rooms };
        };

    

    return Room;
  }

  angular
    .module('partybeats')
    .factory('Room', ['$firebaseArray', Room]);
})();