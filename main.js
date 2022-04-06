// Visualizzare in pagina 5 numeri casuali (in un range tra 1 e 100). Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

/*Generare 5 numeri random tra 1,100 poi stamparli nel HTML */
let numRandom = [];
let i = 0
while (numRandom.length < 5){
    i = getRandomInt(1, 100)
    i++
    numRandom.push(i)
    numRandom.join(' - ')
    console.log(numRandom)
}
let random = document.getElementById('random');
random.innerHTML = numRandom.join(' - ');

/*Togliere numeri dopo un tot */

let removeNum = setTimeout(function () {
random.innerHTML = '';
}, 3000);

/*Inseriri i 5 numeri nel prompt */
let enter = [];
let x = 0;
let timer = setTimeout(function () {
   for(x = 0; x < 5; x++){
    let c = parseInt(prompt('Inserisci i numeri visualizzati precedentemente'));
    enter.push(c);
    console.log(enter)
    
   }
console.log(enter)
},4000)

/*il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/


for(let y = 0; y < enter.length; y++){
    console.log(enter[y]);
      for(let k = 0; k < numRandom.length; k++){
         if(numRandom[i] === enter[x]){
             console.log(enter[x])
         }else if(numRandom[i] === enter[y]){


         }
      }
    }
 