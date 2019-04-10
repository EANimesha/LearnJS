function inArray(arraytocheck,value) {
    for (let index = 0; index < arraytocheck.length; index++) {
        if(arraytocheck[index]==value){
            return true;
        }
    }
    return false;
}

var arr=[3,4,6,82,5,8];
document.write(inArray("IN Array"+arr,5),"<br>");


//ex-2

function times2(num){
    var x=2; //local variable
    return num*x;
}

function times3(num){
    return num*3;
}
function multiply(func,num) {
    return func(num);
}

document.write("2*15=",multiply(times2,15),"<br>");
document.write("3*15=",multiply(times3,15),"<br>");

//function expressions
var triple=function(num){
    return num *3;
}
document.write("3*45=",multiply(triple,45),"<br>");

//argument passing
function getsum() {
    var sum=0;
    for (let i = 0; i < arguments.length; i++) {
       sum+=arguments[i];
    }
    return sum;
} 
document.write("Sum= ",getsum(1,2,3,4,5,6),"<br>");

//passing array to a function
function arrtimes2(theArray){
    var newArray=[];
    for (i = 0; i < theArray.length; i++) {
        newArray.push( theArray[i]*2);
        
    }
    return newArray;
}
document.writeln("Array Double:",arrtimes2([1,2,3,4,5,6]),"<br>");

//recursive functions

function factorial(num){
    if(num<=1){
        return 1;
    }else{
        return num*factorial(num-1);
    }
}
document.write("Factorial= ",factorial(5),"<br>");

