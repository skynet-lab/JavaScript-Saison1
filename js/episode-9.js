/* un programme qui demande la moyenne d’un élève
et affiche sa mention (Passable, Assez-Bien, Bien, Très bien,
Excellent). */

var note, moyenne = 20;
note = prompt('Veillez entré votre moyenne');

if (note >=0 && note <=12){
    alert('Passable'); //affiche Passable si la moyenne est comprise ente 0 et 12
}
else if (13 >= note || note <= 14){
    alert('Assez bien');//affiche Assez bien si la moyenne est 13 ou 14
}
else if (15 >= note || note <= 16){
    alert('bien'); //affiche Bien si la moyenne est 15 ou 16
}
else if (17 <= note || note >= 18){
    alert('Tres bien'); //affiche Tres bien si la moyenne est 17 ou 18
}
else if (19 <= note || note >= 20){
    alert('Excellent'); //affiche Excellent si la moyenne est 19 ou 20
}
