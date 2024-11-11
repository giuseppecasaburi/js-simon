// ELEMENTI NECESSARI
const cardElm = document.querySelectorAll(".card");
const counterElm = document.getElementById("counter");

// GENERATORE DI NUMERI CASUALI
for (let i = 0; i < 5; i++) {
    const curRandNum = Math.floor(Math.random() * (99) + 1);
    cardElm[i].innerHTML = curRandNum;
}


// TIMER
let i = 5;

const currElm = setInterval(function(){
    if (i > 0) {
        counterElm.innerHTML= (i);
        i --;
    } else {
        counterElm.innerHTML = "Tempo scaduto!";
        cardElm.forEach(function(card) {
            card.classList.add("hidden");
        });
        
        clearInterval(currElm);
    }
}, 1000);








