// DOM 

console.log("DOM.js OK")

  /*
   exo1: Créez un bouton. Lorsqu'on clique dessus, son texte devient "Clic !".
    let bouton = document.querySelector("button");




   exo2: Créez une div de 200x200 pixels. Changez sa couleur en rouge lorsque la souris la survole, et remettez sa couleur d'origine lorsque la souris quitte la zone.     



   exo3: lorsqu'un utilisateur presse une touche, affichez son nom dans un paragraphe. 




   exo final :   Une zone (div) de 100x100 pixels qui change de couleur lorsque la souris passe dessus.
                Un champ texte qui affiche les lettres pressées.
                 Un bouton qui, lorsqu'on clique dessus, affiche une alerte avec le texte : "Bravo, vous avez réussi !".


*/


//exo 1 :



let buttonOne = document.querySelector(".dom");

console.log(buttonOne);

buttonOne.addEventListener("click", buttonClick())



function buttonClick(){

    alert("Bravo"); 
} 