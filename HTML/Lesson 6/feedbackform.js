console.log("TipCalculator");
function bill() {
    var bill = Number(document.getElementById("bill").value);
    var rating = Number(document.getElementById("rating").value);
    var people= Number(document.getElementById("people").value);
    
    var result = 0;
//bill,rating/100*bill
var tip= rating/100*bill;
result= tip;

  
    console.log(bill, rating, people, "result", result);
    document.getElementById("result").innerText = result;
    
}