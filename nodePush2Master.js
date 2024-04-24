const { exec } = require('child_process');
 
// Funció per fer un commit i fer push als repositoris remots
function commitAndPush(commitMessage) {
    // Comandament per afegir tots els canvis a la zona d'espera
    const addCommand = 'git add .';
    // Comandament per fer un commit amb el missatge proporcionat
    const commitCommand = `git commit -m "${commitMessage}"`;
    // Comandament per fer push als repositoris remots
    const pushCommand1 = 'git push origin master';
    const pushCommand2 = 'git push -u origin2 master';
    // Executar els comandaments en sèrie
    exec(`${addCommand} && ${commitCommand} && ${pushCommand1} && ${pushCommand2}`, (error, stdout, stderr) => {
        
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }
        console.log(`Commit realitzat amb èxit: ${commitMessage}`);
    });
}
 
// Utilitzar el primer argument de la línia de comandes com a missatge del commit
const commitMessage = process.argv[2];
 
// Comprovar si s'ha proporcionat un missatge de commit
if (commitMessage) {
    commitAndPush(commitMessage);
} else {
    console.error('Cal proporcionar un missatge de commit com a argument.');
}