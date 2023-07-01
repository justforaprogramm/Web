//      const       //

const PI = 3.14159;
let radius;
let circumference;

document.getElementById("bu1").onclick = (e) =>{
    e.preventDefault();

    radius = document.getElementById("input").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("p1").innerHTML = "The circumference = " + circumference;
}

//      Math        //

//round
let nice;
let x;

x = 3.4;
nice = 2;


if (nice == 0){
    x = Math.floor(x);
}
else if (nice == 1){
    x = Math.round(x);
}else if(nice == 2){
    x= Math.ceil(x);
}

console.log(x);

//verschiedenes

x = Math.pow(x, 2);
console.log(x);


x = Math.sqrt(x);
console.log(x);

x = x - 6;
console.log(x);

x = Math.abs(x);
console.log(x);

// max,min
x = -3.14;
let y = 5;
let z = 9;
let max;
let min;

max = Math.max(x, y, z);
min = Math.min(x, y, z);

x = Math.PI;

console.log({max, min, x});

//Random

let x2 = [0, 0, 0];

document.getElementById("btn").onclick = function(){
    x2[0] = Math.round(Math.random() * 9) + 1;
    x2[1] = Math.round(Math.random() * 25) + 1;
    x2[2] = Math.round(Math.random() * 50) + 1;

    document.getElementById("Rdn0Label").innerHTML = `<= 10: ${x2[0]}`;
    document.getElementById("Rdn1Label").innerHTML = `<= 25: ${x2[1]}`;
    document.getElementById("Rdn2Label").innerHTML = `<= 50: ${x2[2]}`;
}
document.getElementById("Rdn0Label").innerHTML = `<= 10: ${x2[0]}`;
document.getElementById("Rdn1Label").innerHTML = `<= 25: ${x2[1]}`;
document.getElementById("Rdn2Label").innerHTML = `<= 50: ${x2[2]}`;


//      Math practice       //

/*
    let a;
    let b; 
    let c;

    a = window.prompt("Enter side A");
    a = Number(a);

    b = window.prompt("Enter side B");
    b = Number(b);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    console.log("%c side C: ", "color:green;",c);
*/

let side = [0, 0, 0];

document.getElementById("bu2").onclick = (e) =>{
    e.preventDefault();

    side[0] = document.getElementById("A").value;
    side[0] = Number(side[0]);
    side[1] = document.getElementById("B").value;
    side[1] = Number(side[1]);
    side[2] = Math.sqrt(Math.pow(side[0], 2) + Math.pow(side[1], 2));
    document.getElementById("p2").innerHTML = "Hypotenuse: " + side[2];
}


//      anwendung       //
let count = 0;

document.getElementById("ic").onclick = function(){

    count++;
    document.getElementById("count").innerHTML = count;
}

document.getElementById("dc").onclick = function(){
    
    count -= 1;
    document.getElementById("count").innerHTML = count;
}

document.getElementById("reset").onclick = function(){
    
    count = 0;
    document.getElementById("count").innerHTML = count;
}

//      consol log      //

/*

    console.log( console );
    console.assert(bool, ...);
    console.log( {see items});
    console.table( obj);
    console.group(label);
    console.dir(sth);
    console.count(add 1);
    console.time(); start timer
    console.timeLog(); stop timer

    console.trace();

    console.log('%c for css', 'color:white;');

*/


//      string properties & methods     //

let userName = "Bro Code";

console.log(userName.length);
console.log(userName.charAt(0));
console.log(userName.indexOf("o"));
console.log(userName.lastIndexOf("o"));

userName = " Bro Code ";

userName = userName.trim();
console.log(userName)

userName = userName.toUpperCase();
console.log(userName)

userName = userName.toLowerCase();
console.log(userName)

let pN = "123-456-7890";

pN = pN.replaceAll("-", " ");
console.log(pN);


//      Slice() & indexof()    //

let fullName = "Bro Code";
let firstName;
let lastName;

firstName = fullName.slice(0, 3);
lastName = fullName.slice(4);

console.log(firstName);
console.log(lastName);

let fullName2 = "My Friend";
let firstName2;
let lastName2;

firstName2 = fullName2.slice(0, fullName.indexOf(" "));
lastName2 = fullName2.slice(fullName.indexOf(" "));


console.log(firstName2);
console.log(lastName2);


//      method chaining     //

let un = "benjamin";

let letter = un.charAt(0).toUpperCase().trim();

console.log(letter);