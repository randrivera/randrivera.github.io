let hello = document.getElementById("hello");
let type = document.querySelector("#type-message")


  
  let r = document.querySelector(':root');
  let nameInput = document.querySelector(".nameInput");
  
  hello.innerHTML = "Hi " + sessionStorage.getItem("userName") + "! ♥";



//create custom colorPicker using iro.js
let rbackground = [
  'F30909',
  'F37E09',
  '7EF309',
  '0931F3',
  'CB09F3', 
];
let randomColor = rbackground[Math.floor(Math.random()*rbackground.length)];

var colorPicker = new iro.ColorPicker("#picker", {
    
    width: 200,
    color: "#" +randomColor,
    layout: [
        { 
          component: iro.ui.Wheel,
        },
    ]
  });

  r.style.setProperty('--my-variable', sessionStorage.getItem("userColor"));

  colorPicker.on('color:change', function(color) {
    //add current color HEX code to userColor storage
    sessionStorage.setItem("userColor", color.hexString);
    //reset data for userColor
    r.style.setProperty('--my-variable', sessionStorage.getItem("userColor"));

  });


  document.documentElement.setAttribute("data-theme", sessionStorage.getItem("userMode"));

  document.addEventListener("DOMContentLoaded", function(event) {
    let checkbox = document.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('change', function () {

      let currentTheme = document.documentElement.getAttribute("data-theme");
      // Switch between `dark` and `light`
      let switchToTheme = currentTheme === "dark" ? "light" : "dark";
      sessionStorage.setItem("userMode", switchToTheme);

      document.documentElement.setAttribute("data-theme", sessionStorage.getItem("userMode"));
    }
  )});
  