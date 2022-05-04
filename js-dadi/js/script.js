computerRandom = 0;
utenteRandom = 1;
//ora controllo quale tra i due numeri è più grande
const utente = document.querySelector(".utente");
const computer = document.querySelector(".computer");

const userElement = document.createElement("div")
userElement.classList.add("dice");
userElement.setAttribute("id", "userDice");
utente.append(userElement);


const computerElement = document.createElement("div")
computerElement.classList.add("dice");
computerElement.setAttribute("id", "computerDice");
computer.append(computerElement);




do{
    //creo due variabili, utente e computerRandom a cui assegno come valore
    //un numero random
    utenteRandom = Math.floor(Math.random() * 6) + 1;
    computerRandom = Math.floor(Math.random() * 6) + 1;

    
    switch(utenteRandom) {
        case 1:

            document.getElementById("userDice").innerHTML = ' <div class="point center"></div>';

          break;
        case 2:

            document.getElementById("userDice").innerHTML = ' <div class="point top-right"></div> <div class="point bottom-left"></div>';

          break;
        case 3:

            document.getElementById("userDice").innerHTML = ' <div class="point top-right"></div> <div class="point center"></div> <div class="point bottom-left"></div>';

          break;
        case 4:
          
            document.getElementById("userDice").innerHTML = ' <div class="point top-right"></div> <div class="point top-left"></div> <div class="point bottom-left"></div> <div class="point bottom-right"></div>';
          
          break;
        case 5:

            document.getElementById("userDice").innerHTML = ' <div class="point top-right"></div> <div class="point top-left"></div> <div class="point center"></div> <div class="point bottom-left"></div> <div class="point bottom-right"></div>';
          
          break;
        default:
            document.getElementById("userDice").innerHTML = '<div class="point top-left"></div> <div class="point top-right"></div> <div class="point center-right"></div> <div class="point center-left"></div> <div class="point bottom-left"></div> <div class="point bottom-right"></div>'
      }

      switch(computerRandom) {
        case 1:

            document.getElementById("computerDice").innerHTML = ' <div class="point center"></div>';

          break;
        case 2:

            document.getElementById("computerDice").innerHTML = ' <div class="point top-right"></div> <div class="point bottom-left"></div>';

          break;
        case 3:

            document.getElementById("computerDice").innerHTML = ' <div class="point top-right"></div> <div class="point center"></div> <div class="point bottom-left"></div>';

          break;
        case 4:
          
            document.getElementById("computerDice").innerHTML = ' <div class="point top-right"></div> <div class="point top-left"></div> <div class="point bottom-left"></div> <div class="point bottom-right"></div>';
          
          break;
        case 5:

            document.getElementById("computerDice").innerHTML = ' <div class="point top-right"></div> <div class="point top-left"></div> <div class="point center"></div> <div class="point bottom-left"></div> <div class="point bottom-right"></div>';
          
          break;
        default:
            document.getElementById("computerDice").innerHTML = '<div class="point top-left"></div> <div class="point top-right"></div> <div class="point center-right"></div> <div class="point center-left"></div> <div class="point bottom-left"></div> <div class="point bottom-right"></div>'
      }


    if(utenteRandom > computerRandom){

        document.getElementById("userText").innerHTML = "HAI VINTO!"
        document.getElementById("computerText").innerHTML = "HAI PERSO :("
        document.getElementById("userText").style.color="green";
        document.getElementById("computerText").style.color="red";
        
    } else if(computerRandom > utenteRandom){

        document.getElementById("userText").innerHTML = "HAI PERSO :("
        document.getElementById("computerText").innerHTML = "HAI VINTO!"
        document.getElementById("userText").style.color="red";
        document.getElementById("computerText").style.color="green";
    }

} while(utenteRandom === computerRandom);