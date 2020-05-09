/*un programme qui demande à l'utilisateur deux
nombres et affiche leur somme en alerte*/
var premierNbr, deuxiemeNbr, msg ='Le resultat est: ', total, total2; 
    premierNbr = prompt('Entrez un nombre!');
    deuxiemeNbr = prompt('Encore un autre');
    total = parseInt(premierNbr) + parseInt(deuxiemeNbr);
    total2 = msg + total;
alert(total2);