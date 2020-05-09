/*un programme qui demande le nom de l’utilisateur
et son sexe et affiche ​Bonjour monsieur ​<nom> ou ​Bonjour
madame​ ​<nom>​.​ ​Où ​<nom>​ est le nom saisi par l’utilisateur. */

var prenom, sexe;
prenom = prompt('Quel est votre prenom? ');
sexe =prompt('Quel est votre sexe? ');

if (sexe=='homme','Homme'){
    alert('Bonjour Monsiuer ' + prenom);

}
else if (sexe=='femme','Femme'){
    alert('Bonjour Madame' + prenom);
}
