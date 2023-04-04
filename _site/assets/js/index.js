let txt = prompt("Welcome new friend!", "please enter your name here");
let hello = document.getElementById("hello");
let type = document.querySelector("#type-message")

function helloMessage() {
    hello.innerHTML = "Hi " + txt + "! ♥";
}
  
window.onload = helloMessage();