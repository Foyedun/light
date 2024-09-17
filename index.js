const heading = document.querySelector('.anyname')
// console.log(heading)
var p = document.querySelector('#comeout')
var light = document.getElementById('light')
// var anotherone = document.getElementById('comeout')
function giveaname (){
    heading.innerHTML = "lasheesim"
}
function change (){
    p.style.backgroundColor = "yellow"
}
function lightOn (){
light.src = "assets/bulb.png"
}
function lightOff (){
    light.src = "assets/bulb white.png"
}