angular
  .module('icescope.room', [])
.controller('roomController', roomController)
.factory('roomFactory', roomFactory);

function roomController($stateParams) {

  var comm = new Icecomm('3kB4PpZaNNFN4r3xhmOVgcPn2D8rzcOTtQFh4gRwmAsaGTPwlm');

  comm.on('local', function(peer) {
    console.log('I AM BROADCASTING');
  });

  comm.on('connected', function(peer) {
    console.log(peer);
    remote.src = peer.stream;
  });

  var roomURL = $stateParams.roomID;
  var options = {};
  comm.connect('lobby', {stream: false}, function() {
    if (comm.getDomain()[roomURL] && comm.getDomain()[roomURL].length !== 0) {
      console.log(comm.getDomain()[roomURL]);
      options.stream = false;
    }
    comm.connect(roomURL, options)
  });

}

function roomFactory() {



}




