


/*
Exercice 1 : Calculatrice simple
Demandez à l'utilisateur de saisir deux nombres et une opération (+, -, *, /). Effectuez l'opération choisie et affichez le résultat.
Vous devez utilser : ParseFloat et prompt & console.log pour le resultat.

*/

function Calculatrice() {
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

}


/*Exercice 2 : Pair ou impair
Demandez à l'utilisateur d'entrer un nombre entier. Utilisez un opérateur de comparaison pour déterminer si le nombre est pair ou impair, et affichez le résultat. */


function Parity() {
let number = parseFloat(prompt("entrer un nombre"));
let parity;

if ((number%2) === 0) {
    parity = "paire";
}
else {
    parity = "impaire";
}

console.log("Le nombre " + number + " est " + parity);

}


/*
Demandez à l'utilisateur de saisir deux nombres. Comparez-les en utilisant des opérateurs de comparaison (>, <, ==) et affichez lequel est le plus grand ou si les deux sont égaux.
Exemple de fonctionnement :
Entrez le premier nombre : 12
Entrez le deuxième nombre : 8
Le premier nombre est plus grand que le deuxième.  */


function Comparaison() {
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

console.log(NUMBER_ONE + prime + NUMBER_TWO );25

}



/*Créez un programme qui demande une note entre 0 et 100.
Si la note est supérieure ou égale à 90, affichez "Excellent".
Si elle est entre 70 et 89, affichez "Bien".
Si elle est entre 50 et 69, affichez "Passable".
Sinon, affichez "Échec".
Exemple de fonctionnement :
Entrez une note : 75
Résultat : Bien
*/

function Note() {

const NOTE = parseFloat(prompt("Entrez une note sur 100"));
let com;

if((NOTE >= 90) && (NOTE<=100) ) {
    com = "Excellente";
}
else if((NOTE<=89)&&(NOTE>=70)) {
    com = "Bien";
}
else if((NOTE<=69)&&(NOTE>=50)) {
    com= "Passable";
}
else if (NOTE<50){
    com = "Echec";
}


if(NOTE>100 || NOTE<0) {
    console.log("mauvaise saisie")
}
else {
    console.log("Votre note de " + NOTE + " est " + com )
}

}



/* Demandez à l'utilisateur d'entrer un nombre. Vérifiez si ce nombre est un multiple de 3 et de 5. Affichez un message en conséquence.
Exemple de fonctionnement :
Entrez un nombre : 15
15 est un multiple de 3 et de 5.    */

function Multiple() {
    const NUMBER = parseFloat(prompt("entrez un nombre"));

    if ((NUMBER%3===0) || (NUMBER%5===0)) {
        console.log(NUMBER + " multiple de 3 ou de 5");
    }
    else {
        console.log(NUMBER + " n'est pas multiple de 3 ou de 5");
    }
}

/*Créez un programme où un nombre est prédéfini dans une variable (par exemple, nombre_secret = 42). Demandez à l'utilisateur de deviner le nombre, et indiquez s'il est plus grand, plus petit ou correct.
Exemple de fonctionnement :
Devinez le nombre secret : 30
Trop petit !
Devinez le nombre secret : 42
Bravo, vous avez deviné !  */

function JustePrix() {
    const MAGIC = 58;
    let trie = parseFloat(prompt("deviner le nombre magique"));

    if(trie === MAGIC) {
        console.log("Bravo vous avez gagnez !!!!!!!!")
    }
    else if (trie> MAGIC) {
        console.log("Dommage trop grand ") 
     }
     else if (trie< MAGIC) {
        console.log("Dommage trop petit ") 
     }
   
}

//Écrivez une boucle for qui affiche tous les nombres pairs entre 0 et 20 inclus.


function Bouclette() {
    
    for(let i=0 ; i < 21 ; i++) {
        if(i%2===0) {
            console.log(i);
        }
    }
}

/*Écrivez une boucle while qui demande à l'utilisateur de saisir un mot. Arrêtez la boucle si l'utilisateur entre "stop".
Exemple de fonctionnement :
Entrez un mot : Bonjour
Entrez un mot : Soleil
Entrez un mot : stop */

function BoucleMot() {
    let SAFE_WORD = "stop";
    let expression;
    let stop = true;

    /*while (stop)  {
        expression = prompt("entrez un mot");
        if(expression === SAFE_WORD) {
            stop = false;
        }
    } */

   /*while(expression !== SAFE_WORD) {
    expression = prompt("entrez un mot");
    */
   
   while((expression=prompt("entrez un mot")) !== SAFE_WORD) 
    {
        console.log(expression); 
    }
}


//Demander un nombre entre 1 et 10 tant qu’il n’est pas valide

function Enumerer() {
    let numb;
    do {
        numb = parseFloat(prompt("Entrez un chiffre entre 1 et 10"))
    } while(numb<1 || numb>10)
}




function Rebour() {
    for(let i=10;i>0;i--)
 {
    console.log(i);
    alert(i);

 }}

/* Écrivez une boucle qui calcule la somme des nombres de 1 à 100 et affiche le résultat.
Sortie attendue :
La somme des nombres de 1 à 100 est : 5050  */


function Somme() {
    let result=0;
    for(let i=1;i<101;i++) {
        result = result + i;
        //result += i;
    }
    console.log(result);
}

/*Demandez à l'utilisateur de saisir un mot, puis utilisez une boucle pour compter le nombre de voyelles (a, e, i, o, u) dans ce mot
const voyelles = ["a", "e", "i", "o", "u"];
includes()
let mot = "bryan"
let compteur = 0  
*/

function Voyelles() {
    let mot = prompt("Entrez un mot");
    let long = mot.length;
    let compteur = 0;
    const REFERENTIEL = ["a","e","i","o","u","y"];
    let longRef = REFERENTIEL.length;

    for(let i=0;i<long;i++) {

       /*for(let j=0;j<6;j++) {
        if(mot[i].includes(REFERENTIEL[j])) {
            compteur++;
        }
       } 
        
       */

       //solution avec 2 boucles:

        /**for(let j=0;j<longRef;j++) {
            if(mot[i]=== REFERENTIEL[j]) {
                compteur++;
            }
           }
            */ 

        //solution avec fonction include :

        if(REFERENTIEL.includes(mot[i])) {
            compteur++;
        }
    }
    console.log(compteur);
}

/*Utilisez une boucle pour afficher une pyramide de symboles * avec 5 étages.
Sortie attendue :
a
aa
aaa
aaaa
aaaaa */

function Pyramide() {

    let string = "";
    for(let i = 0;i<5;i++) {
        string = string+ "a";
        console.log(string);
   } 

   let long=20;

    for(let i= 0;i<long;i++) {
        string += " ".repeat((long-i)/2) + "a".repeat(i) + " ".repeat((long-i)/2) + "\n";
    }
    console.log(string);

}

/*Demandez à l'utilisateur un nombre, puis générez et affichez sa table de multiplication de 1 à 10.
Exemple :
Entrez un nombre : 4
4 x 1 = 4
4 x 2 = 8
...
4 x 10 = 40 */


function Table() {
    let result=0;
    let operande= parseFloat(prompt("quelle table de multiplication voulez-vous ?"));

    for(let i =1;i<11;i++) {
        result= operande * i;
        console.log(operande + " x " + i + " est egal à " + result);
    }
}

/*Utilisez une boucle pour afficher tous les nombres entre 1 et 50 qui sont divisibles par 3 et par 5.
Sortie attendue : 
15
30
45 */

function BoucleNum() {
    
    for(i=1;i<51;i++) {
        if(i%3==0 && i%5==0) {
            console.log(i);
        }

    }

} 
function Addition(a,b) {
    return a + b;
}

function Multiplication(a,b) {
    return console.log(a * b);
}

function Factorielle() {
    let number =  parseFloat(prompt("Entrer un nombre"));
    let result=1;

    for(let i =1;i<number+1;i++) {
        result = result *i;
        console.log(result)
    }

   // console.log(result);
   
}

/*function DireBonjour(prenom) {
    return console.log("Bonjour " + prenom);
}
    */

const DireBonjour = (prenom ) => console.log("Bonjour " + prenom);

DireBonjour("Georgie");


function MoyenneTrois(a,b,c) {
    moy = (a+b+c)/3 ;
    return console.log("La moyenne est de " + moy);
}



// meme fonction mais sans limite de note pour faire la moyenne

function MoyenneInf() {

    let somme=0;
    let result=0;
    for(let i =0;i<arguments.length;i++) {
        somme += arguments[i];
    }

    return console.log("La moyenne arg est de "  + somme/arguments.length);
 
}


//MoyenneInf(10,20,10,20,20,20,20,20);

function EstPaire(number) {

   

    /*
    if ((number%2) === 0) {
        parity = "paire";
    }
    else {
        parity = "impaire";
    }*/
    
   // return console.log("Le nombre " + number + " est " + parity);

   return number%2 === 0;

    }
    
  //  console.log(EstPaire(12));


  function TableMulti() {

        function Table(a) {
            let result=0;
           // let i=1;
        
            for(let i = 1;i<11;i++) {
                result= a * i;
                console.log(a + " x " + i + " est egal à " + result);
            }

            
        }
        
       Table(parseFloat(prompt("Entrer chiffre table")));

    } 

  //Créez un tableau animaux contenant les valeurs : "Chien", "Chat", "Lapin". Utilisez une boucle pour afficher chaque élément dans la console.
    function Tableau() {
        let tab = ["Chien", "Chat", "Lapin"];
     
        /*   for(let i=0;i<tab.length;i++) {
            console.log(tab[i]);
        }
    } */

        //deuxieme methode de lecture de tableau

        for(let animal of tab) {
            console.log(animal);
        }

    }


    /*Ajoutez "Oiseau" à la fin du tableau animaux.
Supprimez "Chat" du tableau.
Affichez le tableau final.
  */

    function TableauModif() {
        let tab = ["Chien", "Chat", "Lapin"];
     
        //tab.push("Oiseau");
        tab.splice(3,0,"Oiseau") //splice(a partir de index 3,supprime 0 element,ajoute "Oiseau")

        tab.splice(1,1); // splice(a partir de index 1,supprime 1 element,"")

        for(let animal of tab) {
            console.log(animal);
        }

        //let index = animaux.indexOf("Chat");
    }
//Créez une fonction trouverElement qui prend un tableau et une valeur en paramètre, et retourne true si la valeur est dans le tableau, sinon false.

    function findTab(tab,saisie) {
        //let tab = ["Chien", "Chat", "Lapin"];
        //let saisie = prompt("Rechercher un mot");
        let index = tab.indexOf(saisie);

        //return tab.includes(saisie);
        if(index === -1) {
            return alert("Mot introuvable");
        } 
        else {
            return alert("Le mot est a l'index " + index)
        }
      }

      //console.log(findTab(["Chien", "Chat", "Lapin"],"Chien"))


      //Créez une fonction sommeTableau qui prend un tableau de nombres et retourne leur somme.
      function SumTab(tab) {

        let somme = 0;
       /* 
       let long = tab.length;

        for(let i=0;i<long;i++)  {
            somme = somme + tab[i];
        }

        */

        for(let nombre of tab) {
            somme += nombre;
        }

        return somme;  
      }

      //let tab = [1,2,3,4];

      //console.log(SumTab(tab));

      //Créez une fonction inverserTableau qui prend un tableau et retourne un nouveau tableau avec les éléments dans l'ordre inverse.

      function InvertTab(tab) {

        let tub = [];
        index =0;

        for(let i=0;i<tab.length;i++) {
            index = tab.length-i;
            tub[index-1]=tab[i];
            }
        return tub;
      }

      //console.log(InvertTab(tab));


      /* Créez une fonction analyserNotes qui prend un tableau de notes (nombres) et retourne un objet avec :
       La note minimale. La note maximale. La moyenne des notes.  */


      function AnalyseNote(tab){
        let tri = new Object();
        //let moyenne=0; 
        
        //moyenne = SumTab(tab)/tab.length;

        let somme = tab.reduce((acc,tab) => acc + tab , 0 ); // commence par l'index 0
        let moyenne = somme / tab.length ;

        tri = {
            note_max : Math.max(...tab),
            note_min : Math.min(...tab),
            note_moy : moyenne

        }
        return tri;
      }
      //let tab = [20,10,0,15];

      //console.log(AnalyseNote(tab) )

      let livre = {
        titre : "le temps des tempetes",
        auteur : "Nicolas Bracelet",
        annee : 2020
      }
      //console.log(livre);
      livre.genre = "politik";
      delete livre.auteur;

      //console.log(livre);

      let film = {
        titre : "Dr Follamour",
        annee : 1964,
        realisateur : {
            prenom: "Stanley",
            nom: "Kubrick"
        }
      }
      //console.log(film.realisateur.prenom);

      let panier = {

        article1: {
            nom_du_produit : "Corde" ,
            prix: "20 €"
        },

        article2: {
            nom_du_produit: "Tabouret" ,
            prix: "70 €"
        },

        article3:  {
            nom_du_produit: "Destop" ,
            prix: "5€"
        }
      }

      /*for(let cle in panier) {
        console.log(cle,panier[cle]);
      }  */

        let joueur ={
            nom: "Jojo",
            score: 0,
            ajouterScore(ajout) {

                this.score += ajout;
                return this.score;

            }
        }
        joueur.ajouterScore(10);

        console.log(joueur.score)




