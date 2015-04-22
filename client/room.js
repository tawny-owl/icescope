(function() {

var comm = new Icecomm('3kB4PpZaNNFN4r3xhmOVgcPn2D8rzcOTtQFh4gRwmAsaGTPwlm', {debug: true});

comm.on('local', function(peer) {
  console.log('I AM BROADCASTING');
});

comm.on('connected', function(peer) {
  console.log('connected');
  console.log(peer);
  console.log(peer.stream);
  if (peer.stream) {
    remote.src = peer.stream;
  }
});

var roomURL = window.location.pathname;
var options = {
  stream: false
};
comm.connect('lobby', {stream: false}).then(function() {
  console.log('room size', comm.getDomain());
  if (!comm.getDomain()[roomURL] || comm.getDomain()[roomURL].length === 0) {
    console.log('setting stream to true');
    options.stream = true;
  }
  console.log('options');
  console.log(options);
  // options.audio = false;
  comm.connect(roomURL, options);
});

})();




