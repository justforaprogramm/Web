var character =
document.getElementById("character");
var block=
document.getElementById("block");
function jump(){
    if(character.classList != "animate")
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate")
    },500);
}
var checkDead =setInterval(funktion(),{
    var characterTop =
    parseInt(window,getComputedStyle(character).
    getPropertyValue("top"));
    var blockleft =
    parseInt(window,getComputedStyle(character).
    getPropertyValue("left"));
    if(blockleft<20 && blockleft>0 %% characterTop>=130){
            block.Style.animation = "none";
            block.style.display = "none";
            alert("u lose")
    }
},10);