let output = document.getElementById("output")
let passwordCount = document.getElementById("passwordCount")
let lowercaseSel = document.getElementById("lowercase")
let uppercaseSel = document.getElementById("uppercase")
let numberSel = document.getElementById("number")
let symbolSel = document.getElementById("symbol")
let button = document.getElementById("passowordGen")
let clipboard = document.getElementsByClassName("flipboard")[0]
button.addEventListener("click",passwordGenerator)
clipboard.addEventListener("click",copyText)
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lowerCase = "abcdefghijklmnopqrstuvwxyz"
let number =  "1234567890"
let symbol = "#@$%!_-?{}[]&^"
let finalOutput = ""
let count = 0

function passwordGenerator (){
let result = ""
let randomPass =""
uppercaseSel.checked && (result += uppercase)
lowercaseSel.checked && (result += lowerCase)
numberSel.checked && (result +=  number)
symbolSel.checked && (result += symbol)
  if (passwordCount==0){
    result=0; 
  }
 for (let i =0; i<passwordCount.value; i++){
randomPass += result[Math.floor(Math.random()*result.length)]
 }
output.textContent = randomPass
}

function copyText (){
    navigator.clipboard.writeText(output.textContent).then(() => {
        alert("Copied to clipboard");
    });
}