const fs = require('fs');
const { exec } = require('child_process');

// Lee el archivo package.json para obtener el número de versión
function getVersionNumber() {
    const packageJson = JSON.parse(fs.readFileSync('package.json'));
    return packageJson.version;
}

// Función para añadir todos los cambios a la zona de espera
function afegirCanvis(callback) {
    const addCommand = 'git add .';
    exec(addCommand, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }
        console.log("Canvis afegits a la zona d'espera.");
        callback();
    });
}

// Función para fer un commit amb el missatge proporcionat
function ferCommit(commitMessage, callback) {
    const commitCommand = `git commit -m "${commitMessage}"`;
    exec(commitCommand, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }
        console.log(`Commit realitzat amb èxit: ${commitMessage}`);
        callback();
    });
}

// Función para fer push al primer repositori remot
function ferPushOrigin(callback) {
    const pushCommand1 = 'git push origin master';
    exec(pushCommand1, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }
        console.log("Push realitzat al repositori 'origin' amb èxit.");
        callback();
    });
}

// Función para fer push al segon repositori remot
function ferPushOrigin2() {
    const pushCommand2 = 'git push -u origin2 master';
    exec(pushCommand2, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }
        console.log("Push realitzat al repositori 'origin2' amb èxit.");
    });
}

// Función para hacer una etiqueta (tag) con la versión actual del package.json
function etiquetarVersion() {
    const versionNumber = getVersionNumber();
    const tagCommand = `git tag -a v${versionNumber} -m "Versió ${versionNumber}"`;
    exec(tagCommand, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }
        console.log(`Etiqueta (tag) creada amb èxit: v${versionNumber}`);
    });
}

// Utilitzar el primer argument de la línia de comandes com a missatge del commit
const commitMessage = process.argv[2];

// Comprovar si s'ha proporcionat un missatge de commit
if (commitMessage) {
    afegirCanvis(() => {
        ferCommit(commitMessage, () => {
            ferPushOrigin(() => {
                ferPushOrigin2();
                etiquetarVersion(); // Llama a la función para etiquetar la versión
            });
        });
    });
} else {
    console.error('Cal proporcionar un missatge de commit com a argument.');
}
