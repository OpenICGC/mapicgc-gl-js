const SftpClient = require("ssh2-sftp-client");
const dotenv = require("dotenv");
//import SftpClient from "ssh2-sftp-client";
//import dotenv from "dotenv";
dotenv.config();
async function deploy() {
  const sftp = new SftpClient();
  sftp.client.setMaxListeners(10);
  const config = {
    host: process.env.FTP_HOST,
    port: 22,
    username: process.env.FTP_USER,
    password: process.env.FTP_PASSWORD,
  };
  try {
    await sftp.connect(config);
    await sftp.fastPut(
      `${process.env.FTP_LOCA_PATH}${process.env.FILE_JS}`,
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
deploy();
