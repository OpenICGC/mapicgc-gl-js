const SftpClient = require("ssh2-sftp-client");
const dotenv = require("dotenv");
const fs = require('fs');
const path = require('path');

dotenv.config();

// Vite genera el bundle UMD directament amb aquest nom.
const inFilePath = path.join(process.env.FTP_LOCA_PATH, 'mapicgc-gl.js');
const renamedFilePath = path.join(process.env.FTP_LOCA_PATH, process.env.FILE_JS);
// Fitxers com el worker de maplibre-gl es generen com a chunk separat i cal pujar-los també.
const assetsLocalPath = path.join(process.env.FTP_LOCA_PATH, 'assets');
const assetsRemotePath = `${process.env.FTP_REMOTE_PATH}assets/`;
// Config.getConfigICGC() prioritza aquest JSON remot sobre el del bundle.
const configLocalPath = path.join(__dirname, 'src', 'mapicgc-config.json');
const configRemotePath = `${process.env.FTP_REMOTE_PATH}mapicgc-config.json`;

async function rename() {
  try {
    await fs.promises.access(inFilePath);
    JSON.parse(await fs.promises.readFile(configLocalPath, 'utf8'));
    if (path.resolve(inFilePath) !== path.resolve(renamedFilePath)) {
      await fs.promises.copyFile(inFilePath, renamedFilePath);
      console.log('File copied and renamed successfully.');
    }
    await Promise.all([
      deploy(process.env.FTP_HOST1),
      deploy(process.env.FTP_HOST2),
    ]);
  } catch (err) {
    console.error('Error preparing deployment:', err);
    process.exitCode = 1;
  }
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
    if (fs.existsSync(assetsLocalPath)) {
      await sftp.uploadDir(assetsLocalPath, assetsRemotePath);
    }
    await sftp.fastPut(configLocalPath, configRemotePath, { overwrite: true });
    console.log("Deploy OK");
  } catch (err) {
    console.error(`Deploy Error: ${err.message}`);
    process.exitCode = 1;
  } finally {
    console.info("End process deploy");
    sftp.end();
  }
}
rename();
