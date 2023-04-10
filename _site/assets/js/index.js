let txt = prompt("Welcome new friend!", "please enter your name here");
let hello = document.getElementById("hello");
let type = document.querySelector("#type-message")

let rbackground = [
    'F30909',
    'F37E09',
    '7EF309',
    '0931F3',
    'CB09F3',
   
  ];
  
  let r = document.querySelector(':root');
  let randomColor = rbackground[Math.floor(Math.random()*rbackground.length)]

  
  
  
function myFunction_set() {
    r.style.setProperty('--my-variable', '#'+ randomColor);	
    // document.getElementById("background").value = "#"+randomColor;

}

function helloMessage() {
    myFunction_set();
    hello.innerHTML = "Hi " + txt + "! ♥";
}
  
window.onload = helloMessage();


// function setup(){
//     createCanvas(windowWidth, windowHeight);
//     colorPicker = select("#background");
// }

// function draw() {
//     let root = document.documentElement;
//     let color = colorPicker.value();
//     root.style.setProperty('--my-variable', color);

// }

var colorPicker = new iro.ColorPicker("#picker", {
    // Set the size of the color picker
    width: 100,
    // Set the initial color to pure red
    color: "#" +randomColor,
    layout: [
        { 
          component: iro.ui.Wheel,
        },
    ]
  });

  colorPicker.on('color:change', function(color) {
    // log the current color as a HEX string
    console.log(color.hexString);
    r.style.setProperty('--my-variable', color.hexString);
  });
