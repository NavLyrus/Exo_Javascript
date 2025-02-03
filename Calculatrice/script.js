


/*
Exercice 1 : Calculatrice simple
Demandez à l'utilisateur de saisir deux nombres et une opération (+, -, *, /). Effectuez l'opération choisie et affichez le résultat.
Vous devez utilser : ParseFloat et prompt & console.log pour le resultat.

*/

/*
let numberOne = parseFloat(prompt("entrer nombre 1"));
let operator = prompt("operateur ?");
let numberTwo = parseFloat(prompt("entrer nombre 2"));
let result = 0;
let saisie = true;



if(operator === "+") {
    result = numberOne + numberTwo;
}
else if (operator === "-") {
    result = numberOne - numberTwo;
}
else if (operator === "*") {
    result = numberOne * numberTwo;
}
else if ((operator ==="/") && (numberTwo !== 0)) {
    result = numberOne / numberTwo;
}
else {
    console.log("mauvaise saisie");
    saisie = false;
}

if(saisie === true) {
    console.log("Le resultat de " +  numberOne + operator + numberTwo + " est egal à " + result);
}

*/


/*Exercice 2 : Pair ou impair
Demandez à l'utilisateur d'entrer un nombre entier. Utilisez un opérateur de comparaison pour déterminer si le nombre est pair ou impair, et affichez le résultat. */


/*
let number = parseFloat(prompt("entrer un nombre"));
let parity;

if ((number%2) === 0) {
    parity = "paire";
}
else {
    parity = "impaire";
}

console.log("Le nombre " + number + " est " + parity);

*/


/*
Demandez à l'utilisateur de saisir deux nombres. Comparez-les en utilisant des opérateurs de comparaison (>, <, ==) et affichez lequel est le plus grand ou si les deux sont égaux.
Exemple de fonctionnement :
Entrez le premier nombre : 12
Entrez le deuxième nombre : 8
Le premier nombre est plus grand que le deuxième.  */

const NUMBER_ONE = parseFloat(prompt("enter nombre 1"));
const NUMBER_TWO = parseFloat(prompt("enter nombre 1"));
let prime;

if(NUMBER_ONE>NUMBER_TWO) {
    prime=" plus grand que ";
}
else if(NUMBER_ONE<NUMBER_TWO) {
    prime=" plus petit que ";
}
else if(NUMBER_ONE===NUMBER_TWO) {
    prime=" est egal à ";
}

console.log(NUMBER_ONE + prime + NUMBER_TWO );

