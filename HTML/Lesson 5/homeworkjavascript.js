function calculateage(){
    
    
    var Age1= document.getElementById("Age1").value;
    var Age2= document.getElementById("Age2").value;

    var Name1= document.getElementById("Name1").value;
    if (!Name1)
    Name1="Name1";
    var Name2= document.getElementById("Name2").value;
    if (!Name2)
    Name2="Name2";
    var result = "blank";
    if (Age1 == Age2 )
        result="child 1 and child 2 are same age";   
            //child 1 and child 2 are same age

    else if( Number(Age1)>Number(Age2))
            result=Name1 + " is elder then " + Name2;
    else
            result=Name2 + " is elder then " + Name1;

    console.log(Age1,Age2, result,);
    document.getElementById("demo").innerText = result;

}

