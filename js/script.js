// GENERATORE DI NUMERI CASUALI
let randNum = [""];

for (let i = 0; i < 5; i++) {
    const curRandNum = Math.floor(Math.random() * (99) + 1);
    randNum += `${curRandNum}, `;
}
console.log(randNum);

// TIMER
const counterElm = document.getElementById("counter");
let i = 30;

const currElm = setInterval(function(){
    if (i > 0) {
        counterElm.innerHTML= (i);
        i --;
    } else {
        counterElm.innerHTML = "Tempo scaduto!";
        clearInterval(currElm);
    }
    
}, 1000);





