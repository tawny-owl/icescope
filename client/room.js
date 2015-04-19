(function() {
angular
.module('icescope.room', [])
.controller('roomController', roomController)
.factory('roomFactory', roomFactory);

function roomController($stateParams) {

  window.comm = new Icecomm('3kB4PpZaNNFN4r3xhmOVgcPn2D8rzcOTtQFh4gRwmAsaGTPwlm');

  comm.on('local', function(peer) {
    console.log('I AM BROADCASTING');
  });

  comm.on('connected', function(peer) {
    console.log('connected');
    console.log(peer);
    if (peer.stream) {
      remote.src = peer.stream;
    }
  });

  var roomURL = $stateParams.roomID;
  var options = {};
  // comm.connect('lobby', {stream: false}, function() {

  //   console.log('domain', comm.getDomain());
  //   if (comm.getDomain()[roomURL] && comm.getDomain()[roomURL].length !== 0) {
  //     console.log('entering room');
  //     options.stream = false;
  //   }
  //   comm.connect(roomURL, options)
  // });

}

function roomFactory() {



}
})();




