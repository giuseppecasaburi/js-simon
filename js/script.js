// ELEMENTI NECESSARI
const cardElm = document.querySelectorAll(".card");
const counterElm = document.getElementById("counter");
const inputElm = document.querySelectorAll(".user-num");

// GENERATORE DI NUMERI CASUALI
for (let i = 0; i < 5; i++) {
    const curRandNum = Math.floor(Math.random() * (99) + 1);
    cardElm[i].innerHTML = curRandNum;
}


// TIMER
let i = 5;

const currElm = setInterval(function(){
    if (i > 0) {
        counterElm.innerHTML = (i);
        i --;
    } else {
        counterElm.innerHTML = "Tempo scaduto!";
        cardElm.forEach(function(card) {
            card.classList.add("hidden");
        });
        
        clearInterval(currElm);
    }
}, 1000);

// CONTROLLO INPUT
for (let i = 0; i <=inputElm.length; i++) {
    const inputValue = inputElm[i].value;
    if (isNaN(inputValue) || inputValue === "") {
        alert("Il valore inserito non è corretto, immetti un numero!")
        break;
    }
}







