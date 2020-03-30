
//CERCA IN UN ARRAY

console.log("java is done");

//ottenere mail dall'utente
var email = prompt ("Inserisci la tua mail");

//array conntenente email

var list = ["michele@boolean.careers" ,  "fabio@boolean.careers" , "roberto@boolean.careers" , "diopo"];

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
