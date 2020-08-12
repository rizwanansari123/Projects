console.log("tablecalculation");
function Tableform() {
    var number1 = Number(document.getElementById("number1").value);
    var number2 = Number(document.getElementById("Table").value);
    var i=1;
    var result = '';
    while (i <= number2) {
        // 5 x 3 = 15
        result += number1 + ' x ' + i + ' = ' + number1 * i;
        result += '<br>';
        ++i;
    }
    
    document.getElementById("result").innerHTML = result;

}

function Multiply() {
    var number1 = Number(document.getElementById("number1").value);
    var number2 = Number(document.getElementById("Table").value);
    var result = 0;
    result = number1 * number2;
    console.log(number1, number2, "result", result);
    document.getElementById("result").innerText = result;


}

