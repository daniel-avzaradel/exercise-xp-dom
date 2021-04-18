const div = document.getElementsByTagName('div')[0]
console.log(div);

div.style.backgroundColor = "lightblue";  
const john = document.querySelector('li');
john.style.display = "none";

const pete = document.querySelectorAll('li')[1];
pete.style.border = "2px solid salmon";

const body = document.body;
body.style.fontSize = "26px"

if(div.style.backgroundColor === "lightblue") {
    alert(`Hello ${john.textContent} and ${pete.textContent}`)
}