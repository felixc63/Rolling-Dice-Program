const button = document.querySelector("button");
const value1 = document.getElementById("value1");
const value2 = document.getElementById("value2");
const totalValue = document.getElementById("total-value");

function rollDie(){
    return Math.floor(Math.random()*6)+1;
}

function setValues(){
    value1.textContent = rollDie();
    value2.textContent = rollDie();
    totalValue.textContent = `Total Value: ${Number(value1.textContent)+Number(value2.textContent)}`;
}

button.addEventListener("click", setValues);