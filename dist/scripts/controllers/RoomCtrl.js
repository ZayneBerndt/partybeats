(function() {
  function RoomCtrl(Room, $scope) {
      
       this.rooms = Room.getRooms().all;
    
  }

  angular
    .module('partybeats')
    .controller('RoomCtrl', ['Room', RoomCtrl]);
})();