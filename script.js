
const display = document.getElementById("display")
let currentValue = ""

function appendValue(input){
   display.value += input 
}

function answerValue(){
    try {
        display.value = eval(display.value)
    } catch (error) {
        display.value = "ERROR!!!"
    }
}

function clearScreen(){
    display.value = ""
}
