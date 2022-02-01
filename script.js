

let countElement = document.querySelector("#count");
let count = 1;

function like(){
    count++;
    countElement.innerText = `${count} like(s)`;
    console.log(countElement)
}