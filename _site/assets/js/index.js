let txt = prompt("Welcome new friend!", "please enter your name here");
let hello = document.getElementById("hello");
let type = document.querySelector("#type-message")

let rbackground = [
    'FF48FF',
    '004CE5',
    '14c420',
    'FFC200',
    'ff4133',
   
  ];
  
  let r = document.querySelector(':root');
  let randomColor = rbackground[Math.floor(Math.random()*rbackground.length)]
  
  
  
function myFunction_set() {
    r.style.setProperty('--my-variable', '#'+ randomColor);	    

}

function helloMessage() {
    myFunction_set();
    hello.innerHTML = "Hi " + txt + "! ♥";
}
  
window.onload = helloMessage();

