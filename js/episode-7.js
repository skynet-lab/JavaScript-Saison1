/*un programme qui demande l'âge de l’utilisateur et
affiche : ​Vous êtes mineur​ ou ​Vous êtes majeur​.
NB : Est considérée majeure, une personne ayant au
moins 18 ans. */

var age;
age = prompt('Entrez votre age');
if (age >= 18) {
    alert('Vous etes Majeur');
} else if (age <= 17) {
    alert('Vous etes Mineur');
}

