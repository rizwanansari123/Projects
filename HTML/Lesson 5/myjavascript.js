function calculateresult(){
    var data1= document.getElementById("Data1").value;
    var data1= document.getElementById("Data2").value;

    var result = Number(Data1) * Number(Data2);
    console.log(Data1,Data2,result,"is your result");

    document.getElementById("result").innerText=result
}