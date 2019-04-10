var customer={name:"Nimesha",address:"123",balance:50.50};
for(k in customer){
    document.write(customer[k]+"<br>");
}

//arrays
var tom=["Tom smith","123 sl",120.56];
document.write(tom[0],"<br>");
tom[3]="a@gmail.com";
 //overide values
tom.splice(2,1,"Nimesha","234");
tom.splice(4,1)

//array to string
document.write(tom.toString(),"<br>");

document.write(tom.join(", "),"<br>");

delete tom[3];

tom.sort();

var numbers=[3,5,7,3,2,,9,0];

numbers.sort(
    function(x,y){
        return x-y // for ascending 
    }              //for descending ---> return y-x
);

document.write(numbers.toString(),"<br>");

//combine two arrays
var combineA=numbers.concat(tom);

tom.pop(); // move the last item
tom.push("333-4455","US"); // add item to the end
tom.shift() //delete first item
tom.unshift() //add items to the begining

for (let index = 0; index < tom.length; index++) {
    document.write(tom[index],"<br>");
    
}

