/*un programme permettant de permuter les valeurs
de deux variables. Le résultat est affiché en console. */
var var_A, var_B, var_C, msg1 = 'La valeur de A est: ', msg2 = ' La valeur de B est: ', totalA, totalB, totalC; 

    var_A = prompt('Ecrivez un nombre A');
    var_B = prompt('Encore un nombre B');
    
    var_C = var_A;
    var_A = var_B;
    var_B = var_C;
    totalA = msg1 + var_A;
    totalB = msg2 + var_B;
    totalC = totalA + totalB;


    console.log(totalC);

