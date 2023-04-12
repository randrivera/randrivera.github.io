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
  
  //Christ helped me with this one <3
  let projects = [];
  projects[0] = document.querySelector("#projone");
  projects[1] = document.querySelector("#projtwo");
  projects[2] = document.querySelector("#projthree");
  projects[3] = document.querySelector("#projfour");
  projects[4] = document.querySelector("#projfive");
  projects[5] = document.querySelector("#projsix");
  projects[6] = document.querySelector("#projseven");
  projects[7] = document.querySelector("#projeight");
  projects[8] = document.querySelector("#projnine");


  let target = document.getElementById("target");
  let targetImg = document.querySelector("#target img");

  for (let i=0; i<projects.length; i++){
    projects[i].addEventListener("mouseenter", function(){
    
      console.log(`-${targetImg.clientHeight}`);
      // target.style.top = "0px";
      target.style.top = `-${targetImg.clientHeight*i}px`;
    });

    projects[i].addEventListener("mouseleave", function(){
    
      console.log(`-${targetImg.clientHeight}`);
      target.style.top = "0px";
    });
  }

  $(".nameInput").mousemove(function(event) {
    var eye = $(".eye");
    console.log('eye', eye)
    var x = (eye.offset().left) + (eye.width() / 2);
    var y = (eye.offset().top) + (eye.height() / 2);
    var rad = Math.atan2(event.pageX - x, event.pageY - y);
    var rot = (rad * (180 / Math.PI) * -1) + 180;
    eye.css({
      '-webkit-transform': 'rotate(' + rot + 'deg)',
      '-moz-transform': 'rotate(' + rot + 'deg)',
      '-ms-transform': 'rotate(' + rot + 'deg)',
      'transform': 'rotate(' + rot + 'deg)'
    });
  });