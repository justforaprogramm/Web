console.log('Hello World');
console.log("It's really good!");

//window.alert("Pizza");

//comment

/*

    multi line comment

*/

//var, let, const
let a;
console.log(a);

a = 15;
console.log(a);

a = a +1;
console.log(a);



let firstname = "Benjamin";
let lastname = "Schmid";  //String
let ag = 15;             //numbers

console.log(`hello ${firstname} ${lastname} You are ${ag} Years old`);

let student = true;       //boolean

if (student = true) {
    console.log("You're a Student");
}
else{
    console.log("You're not a Sudent");
}


document.getElementById("p1").innerHTML = "Hello " + firstname;

 
//             + - * / %  "x="

let students = 20;
students = students - 1 + 1 ;
console.log(students);
students = students / 4 *3;
console.log(students);

let exstudents= students % 2;
console.log(exstudents);

students = students + 1 ;

exstudents= students % 2;
console.log(exstudents);

let r = 1 + 2 * (3+4);
console.log(`${r}`);





//  Userinput

let UN = "Benjamin"; //window.prompt("Your name?");
console.log(UN);

let agen;

document.getElementById("button").onclick = function(){

    agen = document.getElementById("a").value;
    document.getElementById("p2").innerHTML = agen;
    document.getElementById("l1").innerHTML = "Thanks";

}


let age = window.prompt("age?");

console.log(typeof age);
age = Number(age);
console.log(typeof age);
age +=1;

console.log(`Happy Birthday! You are ${age} years old`)



let x, y, z;

x = Number("3.14");
y = String(3.14);
z = Boolean("");

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);