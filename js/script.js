// ELEMENTI NECESSARI
const cardElm = document.querySelectorAll(".card");
const counterElm = document.getElementById("counter");
const inputElm = document.querySelectorAll(".user-num");
const formElm = document.getElementById("form");

// GENERATORE DI NUMERI CASUALI
const randomNum = [];
for (let i = 0; i < 5; i++) {
    curRandNum = Math.floor(Math.random() * (99) + 1);
    randomNum.push(curRandNum);
    cardElm[i].innerHTML = curRandNum;
}


// TIMER
let i = 10;
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


// ANNULLO SUBMIT
formElm.addEventListener("submit", function(event){
    event.preventDefault();


    // CONTROLLO INPUT
    for (let i = 0; i < inputElm.length; i++) {
        const inputValue = inputElm[i].value;
        if (isNaN(inputValue) || inputValue === "") {
            alert("Il valore inserito non è corretto, immetti un numero!")
            break;
        }   
    }


    // CONFRONTO
    let correctCount = 0;
    for (let i = 0; i < inputElm.length; i++) {
        const userValue = parseInt(inputElm[i].value);
        if (randomNum.includes(userValue)) {
            console.log("ottimo");
            correctCount++;
        } else {
            console.log("sbagliato");
        }
    };
});

