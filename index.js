let fs = require('fs');
let Client = require('ssh2-sftp-client');
let sftp = new Client();

let config = {
    host: process.env.SFTP_SERVER,
    port: process.env.SFTP_PORT,
    username: process.env.SFTP_USER,
    privateKey: fs.readFileSync(process.env.PRIVATE_KEY)
};

//let localFile = fs.createReadStream('/tmp/upload.csv');
let Readable = require("stream").Readable;
let stream = new Readable();
stream.push("number,first,last,handle\n"); 
stream.push("1,Mark,Otto,@mdo\n"); 
stream.push("2,Jacob,Thornton,@fat\n"); 
stream.push("3,Larry,the Bird,@twitter\n"); 
stream.push(null); // indicates end-of-file basically - the end of the stream

let remoteDir = `/home/${config.username}`;
let remoteFile = `${remoteDir}/sample-data.csv`;

sftp.connect(config)
.then(() => {
//   return sftp.put(localFile, remoteFile);
  return sftp.put(stream, remoteFile);
})
// .then(() => {
//   return sftp.list(remoteDir);
// })
.then(data => {
  console.log(data, '<-- Success!');
})
.then(() => {
  return sftp.end();
})
.catch(err => {
  console.log(err, '<-- Error!');
});