//creo un array di mail

const mailList = [
    'giovanni@gmail.com', 
    'luca@gmail.com',
    'francesco@gmail.com'
];

//chiedo la mail
const userMail = prompt("Inserisci la mail");

let i = 0;

while (i < mailList.length){
    
    if(userMail === mailList[i]){
        //se è cosi mando a schermo il messaggio "Bentornato"
        alert("Bentornato!");
        break;
    }

    ++i;

    if(mailList.length === i){
        //altrimenti stampo a schermo il messaggio "Mail non trovata"
        alert("Mail non trovata");
        break;
    }
}