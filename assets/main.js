
//CERCA IN UN ARRAY

console.log("java is done");

//ottenere mail dall'utente
var email = prompt ("Inserisci la tua mail");

//array conntenente email

var list = ["michele@boolean.careers" ,  "fabio@boolean.careers" , "roberto@boolean.careers"];

//verificare presenza della mail nell'array tramite ciclo for
var find = false;

for (var i = 0; i < list.length; i++){
  if (email == list[i]){
    find = true;
  }
}

//stampa a video il risultato
if( find== true){
  console.log("La tua Email è presente in lista!");
}

else{
  console.log("Riprova, la tu email non è presente");
}


//GIOCO DEI DADI

//setta due variabili contenenti i valori

var myNumber = Math.floor( Math.random() * 6) + 1;
var pcNumber = Math.floor(Math.random() * 6) + 1;


//verifica quale valore è più alto
if(myNumber > pcNumber){
  console.log("hai vinto con", myNumber, "il tuo avversario ha:" , pcNumber);
}

else if(myNumber < pcNumber){
  console.log("hai perso con", myNumber, "il tuo avversario ha:" , pcNumber);
}

else{
  console.log("PAREGGIO! il tuo numero:", myNumber, "Avversario:" , pcNumber);
}


//versione alternativa: dadi con array;


//creo due array contenenti 6 numeri
var myArray = [1, 2, 3, 4, 5, 6];
var pcArray = [1, 2, 3, 4, 5, 6];

//Creo due indici diversi per ogni array
var myI = Math.floor( Math.random() * 5) + 1;
var pcI = Math.floor( Math.random() * 5) + 1;

console.log("my:" , myArray[myI] , "pc" , pcArray[pcI]);

//verifico con un If quale valore è più alto al corrispondente valore di I

if(myArray[myI] > pcArray[pcI]){
  console.log("hai vinto con:", myArray[myI], "il tuo avversario ha:" , pcArray[pcI]);
}

else if (myArray[myI] < pcArray[pcI]){
  console.log("hai perso il tuo numero:", myArray[myI], "Numero avversario:" , pcArray[pcI]);
}

else {
  console.log("pareggio con:", myArray[myI], "il tuo avversario ha:" , pcArray[pcI]);
}


// //extra step: confrontare tre array diversi (in caso di numero uguale vince l'array che presenta il valore ridondante per primo! :)
//
//
// //dichiaro i tre array
// var a = [];
// var b = [];
// var c = [];
//
// //riempio i 3 array
// for (var i = 0; i < 10; i++){
//   a[i] = Math.floor( Math.random() * 5) + 1;
//   b[i] = Math.floor( Math.random() * 5) + 1;
//   c[i] = Math.floor( Math.random() * 5) + 1;
//   }
//
//
//
//
// //confronto tramite if i tre ARRAY
//
// var myI= Math.floor( Math.random() * 8) +1;
// console.log("Valore A:" , a[myI] , "Valore B:" , b[myI] , "Valore C:" , c[myI]);
// var winner;
//
// if (a[myI] >= b[myI]){
//
//   if (a[myI] >= c[myI]){
//     winner = "a";
//   }
//
//   else{
//     winner = "c";
//   }
// }
//
// else if(b[myI] > c[myI]){
//   winner = "b";
// }
//   else {
//     winner = "c";
//   }
//
//
// console.log(winner);
