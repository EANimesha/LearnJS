var randstr="a long "+"string that "+"goes on and on";
console.log(randstr.length);
console.log("index of \"goes\" :",randstr.indexOf("goes"));
console.log(randstr.slice(19,23));
console.log(randstr.slice(19));
console.log(randstr.substr(19,4));
//replace
console.log(randstr.replace("and on","forever"));
console.log(randstr.charAt(2));

var strarray=randstr.split(" ");
randstr=randstr.trim(); // remove whitespaes
console.log(randstr.toLocaleUpperCase())
console.log(randstr.toLocaleLowerCase())

//string styles
var str1="style text";
document.writeln(str1.big(),"<br>");
document.writeln(str1.bold(),"<br>");
document.writeln(str1.fontcolor("blue"),"<br>");
document.writeln(str1.fontsize("2 em"),"<br>");
document.writeln(str1.italics(),"<br>");
document.writeln(str1.link(),"<br>");
document.writeln(str1.small(),"<br>");
document.writeln(str1.sub(),"<br>");
document.writeln(str1.sup());