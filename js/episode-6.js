/*un programme qui demande à l’utilisateur trois
nombres et affiche la moyenne de ces nombres en alerte. */
var nbr1, nbr2, nbr3,msg ='Votre moyenne est: ', moyenne, total, total2;
    nbr1 = prompt('Entrez un nombre');
    nbr2 = prompt('Encore un autre nombre');
    nbr3 = prompt('Et encore un autre');
total = parseInt(nbr1) + parseInt(nbr2) + parseInt(nbr3);
moyenne = total / 3;
total2 = msg + moyenne;

    alert(total2);