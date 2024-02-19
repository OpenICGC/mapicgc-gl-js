const SftpClient = require("ssh2-sftp-client");
const dotenv = require("dotenv");
const fs = require('fs');
//import SftpClient from "ssh2-sftp-client";
//import dotenv from "dotenv";
dotenv.config();

const inFilePath = `${process.env.FTP_LOCA_PATH}${process.env.FILE_JS_UMD}`;
const renamedFilePath = `${process.env.FTP_LOCA_PATH}${process.env.FILE_JS}`;

 function rename(){
  fs.copyFile(inFilePath, renamedFilePath, (err) => {
    if (err) {
      console.error('Error copying file:', err);
    } else {
      console.log('File copied and renamed successfully.');
<<<<<<< HEAD
      deploy()
=======

      // deploy()

>>>>>>> 0a5e06b6b5540bb2404a5c9581db8f8c649f2707
    }
  });

}

async function deploy(hostFTP) {
  const sftp = new SftpClient();
  sftp.client.setMaxListeners(10);
  const config = {
    host: hostFTP,
    port: 22,
    username: process.env.FTP_USER,
    password: process.env.FTP_PASSWORD,
  };
  try {
    await sftp.connect(config);
    await sftp.fastPut(
      renamedFilePath,
      `${process.env.FTP_REMOTE_PATH}${process.env.FILE_JS}`,
      {
        overwrite: true,
      }
    );
    await sftp.fastPut(
      `${process.env.FTP_LOCA_PATH}${process.env.FILE_CSS}`,
      `${process.env.FTP_REMOTE_PATH}${process.env.FILE_CSS}`,
      {
        overwrite: true,
      }
    );
    console.log("Deploy OK");
  } catch (err) {
    console.error(`Deploy Error: ${err.message}`);
  } finally {
    console.info("End process deploy");
    sftp.end();
  }
}
rename();
