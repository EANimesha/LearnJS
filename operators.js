// ==  -->values equal
// === --> values and type equal

var age =8;
if((age>=5)&&(age<=6)){
    document.write("Go to kindergarden","<br>");
}else if(age>18){
    document.write("Go to coolleg","<br>");
}else{
    document.write("Go to grade",age-5,"<br>");
}

document.write(true||false,"<br>");
document.write(!true,"<br>");
document.write("5"==5,"<br>");
document.write("5"===5,"<br>");

//ternary operator
var x=(age>=18)?true:false;
document.writeln(x);
