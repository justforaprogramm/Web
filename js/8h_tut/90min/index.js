//      If()        //


let age = 65;

if(age >= 65){
    console.log("You are a citizen!");
}
else if(age < 0){
    console.log("You are not even born!");
}
else if(age >= 18){
    console.log("You are an adult!");
}
else{
    console.log("You are a child!");
}

let online = false;

if(online){
    console.log("You are online!");
}else if(!online){
    console.log("You are offline!");
}

//      checkbox        //

document.getElementById("btn").onclick = function(){

    const myCheck = document.getElementById("check");
    const visaBtn = document.getElementById("visaBtn");
    const mastercardBtn = document.getElementById("mastercardBtn");
    const paypalBtn = document.getElementById("paypalBtn");

    if(myCheck.checked == true){
        console.log("You are subscribed");
    }
    else{
        console.log("You are not subscribed");
    }

    if (visaBtn.checked){
        console.log("You are paying with a Visa!");
    }
    else if (mastercardBtn.checked){
        console.log("You are paying with a Mastercard!");
    }
    else if (paypalBtn.checked){
        console.log("You are paying with a Paypal!");
    }
    else {
        console.log("You must select a payment type!");
    }
}

//      switch      //

let grade = "99";

switch(true){

    case grade >= 90:
        console.log("You did great!");
        break;
        case grade >= 80:
        console.log("You did good!");
        break;
        case grade >= 70:
        console.log("You did okay!");
        break;
        case grade >= 60:
        console.log("You passed ... barely!");
        break;
        case grade > 60:
        console.log("You Failed!");
        break;
        default:
            console.log(grade, "is not a letter grade!")
}

//      AND     //

let temp = 15;
let sunny = false;

if (temp > 0 && temp < 30 && sunny){
    console.log("The weather is good!")
}
else{
    console.log("The weather is bad!");
}

if (temp >= 0 || temp >= 30){
    console.log("The weather is not good!")
}
else{
    console.log("The weather is not bad!");
}

//      !       //

let tempe = 15;
let sun = true;

if(!(tempe> 0)){
    console.log("It's cold outside");
}
else{
    console.log("It's warm outside");
}

if(!sunny){
    console.log("It's cloudy outside");
}
else{
    console.log("It's sunny outside");
}

//      while       //

//like Java

/*also do while

    do{}while()

*/

//      for loop        //

//just for(){}
