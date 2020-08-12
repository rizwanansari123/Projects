console.log("Welcome to Calculater");
function Add() {
    var number1 = Number(document.getElementById("number1").value);
    var number2 = Number(document.getElementById("number2").value);
    var result = 0;
    result = number1 + number2;
    console.log(number1, number2, "result", result);
    document.getElementById("result").innerText = result;
}
function Subtract() {
    var number1 = Number(document.getElementById("number1").value);
    var number2 = Number(document.getElementById("number2").value);
    var result = 0;
    result = number1 - number2;
    console.log(number1, number2, "result", result);
    document.getElementById("result").innerText = result;
}
function Multiply() {
    var number1 = Number(document.getElementById("number1").value);
    var number2 = Number(document.getElementById("number2").value);
    var result = 0;
    result = number1 * number2;
    console.log(number1, number2, "result", result);
    document.getElementById("result").innerText = result;
}
function Divide() {
    var number1 = Number(document.getElementById("number1").value);
    var number2 = Number(document.getElementById("number2").value);
    var result = 0;
    result = number1 / number2;
    console.log(number1, number2, "result", result);
    document.getElementById("result").innerText = result;
}


function tryesle(operators){
    var number1 = Number(document.getElementById("number1").value);
    var number2 = Number(document.getElementById("number2").value);
    
       
    var result = 0;

    if(operators=="+")
    result = number1 + number2;

    else if (operators=="-")
    result=number1 - number2;

    else if (operators=="*")
    result=number1 * number2;

    else if (operators=="/")
    result=number1 / number2;

       
    console.log('result',result);
    document.getElementById("result").innerText = result;
}
function calculatewaa(operators){
    var number1 = Number(document.getElementById("number1").value);
    var number2 = Number(document.getElementById("number2").value);
    
       
    var result = 0;

    switch(operators) {
        case '+':
            result = number1 + number2;
          
        break;
        case '-':
            result=number1 - number2;
          break;
          
          case '*':
            result=number1 * number2;
          break;
       
          case '/':
            result=number1 / number2;
          break;
        
          default:
         
      }

  
      
    console.log('result',result);
    document.getElementById("result").innerText = result;
}

function clearscreen(){
   
    document.getElementById("result").innerText = "";
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}

