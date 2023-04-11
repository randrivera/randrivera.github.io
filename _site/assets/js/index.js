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
  let nameInput = document.querySelector(".nameInput");
  
  let button = document.querySelector("#enterBtn");
  button.addEventListener("click", function(){
    let txt = document.querySelector("#collectName").value;
    hello.innerHTML = "Hi " + txt + "! ♥";

    console.log(txt);
    nameInput.style.opacity = "0";
    setTimeout(function()
      {nameInput.style.display = "none";
    }, 1000);
  })
  
  
function myFunction_set() {
    r.style.setProperty('--my-variable', '#'+ randomColor);	
}

window.onload = myFunction_set();

var colorPicker = new iro.ColorPicker("#picker", {
    // Set the size of the color picker
    width: 125,
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
    // console.log(color.hexString);
    r.style.setProperty('--my-variable', color.hexString);
  });



  document.addEventListener("DOMContentLoaded", function(event) {
    let checkbox = document.querySelector('input[type="checkbox"]');

    checkbox.addEventListener('change', function () {
      let currentTheme = document.documentElement.getAttribute("data-theme");
      // Switch between `dark` and `light`
      let switchToTheme = currentTheme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", switchToTheme);
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