console.log ( 95+5 * 10);
console.log ('Apples' == 'Oranges' && 5 > 3 );
console.log (5 > 10  ||4 < 2 );
console.log(3 < 10 && 10 > 8 );
console.log (7 > 5 || 1 > 2 );
console.log (!(7 > 5) ||( 1 > 2));
console.log ("My"+" Name"+" Rizwan");

var apple=10,orange=5;
console.log (apple+orange);

var presentyear=2020,birthyear=1987;
console.log (presentyear-birthyear);

var a=10;
var b=20;
var c=30;
var d=a+b*c;
console.log (d);

var a='R';
var b='I';
var c='z';
var d='W';
var e='A';
var f='N';
var g=a+b+c+d+e+f;
console.log (g);

function maths(a, b,c) {    
    var total = a + b - c;
    return total;
}
var mytotal=maths(10,20,15);
console.log ("is my total value",mytotal);


    function fruits(mango, orange) {
        if (mango > orange)
        var sum = mango - orange;
        else
        var sum = orange - mango;
        
        return sum;
        }
        
        var myfruits = fruits(50, 90);
        
        console.log("this is my fruits total", myfruits);





