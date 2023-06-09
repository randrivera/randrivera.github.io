
//nameScreen
let nameInput = document.querySelector(".nameInput");
//enter button
let button = document.querySelector("#enterBtn");

//hello message in header
let hello = document.getElementById("hello");
let r = document.querySelector(':root');

r.style.setProperty('--my-variable', sessionStorage.getItem("userColor"));

const mediaQuery = window.matchMedia('(min-width: 768px)')
if (mediaQuery.matches){
  //enter name interaction
  button.addEventListener("click", function(){
    //grab value from text input
    let txt = document.querySelector("#collectName").value
    //store value for userName
    sessionStorage.setItem("userName", txt);

    //change hello message name to have userName
    hello.innerHTML = "Hi " + sessionStorage.getItem("userName") + "! ♥";

    //hide nameScreen then display:none it afterwards so it does not interfere with other interactions
    nameInput.style.opacity = "0";
    setTimeout(function()
      {nameInput.style.display = "none";
      }, 1000);
  })

  //checks if a name is already stored and prevents the name popup if so
  function checkStorage(){
    if (sessionStorage.getItem("userName")){
      hello.innerHTML = "Hi " + sessionStorage.getItem("userName") + "! ♥";
      nameInput.style.display = "none";
    } else {
      null
    };
  } 
  window.onload = checkStorage();
};

//change color on every click!
let rbackground = [
  'F30909',
  'F37E09',
  '7EF309',
  '0931F3',
  'CB09F3', 
];


//every click changes the key color
document.addEventListener("click", function(){
    //picks a random color from rbackground[]
    let randomColor = rbackground[Math.floor(Math.random()*rbackground.length)];
    //sets the storage color as the random color from above
    sessionStorage.setItem("userColor", "#"+randomColor);
    //make the variable color the stored color
    r.style.setProperty('--my-variable', sessionStorage.getItem("userColor"));
  });

//dark + light mode code

//sets the mode to the stored userMode
document.documentElement.setAttribute("data-theme", sessionStorage.getItem("userMode"));

//checks for dark/light mode switches
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
  

// Christ (Chris Panicker - panicker.design) helped me with this one <3
// On the homepage, hovering over the title moves the corresponding preview image to the top
  
// all the project previews
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


//div in which all the preview images live in
  let target = document.getElementById("target");
  let targetImg = document.querySelector("#target img");
  const scroller = document.querySelector(".Content");


  for (let i=0; i<projects.length; i++){
    projects[i].addEventListener("mouseenter", function(){
      console.log(`${scroller.scrollTop}`);
    
      console.log(`-${targetImg.clientHeight}`);
      // subtract how much user has already scrolled on their own to the scroll distance
      target.style.top = `-${targetImg.clientHeight*i}` - `-${scroller.scrollTop}` + "px";
    });

    projects[i].addEventListener("mouseleave", function(){
    
      console.log(`-${targetImg.clientHeight}`);
      target.style.top = "0px";
    });
  }

//following mouse eyes in nameScreen
  $(".nameInput").mousemove(function(event) {
    var eye = $(".eye");
    // console.log('eye', eye)
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

//award fireworks code
const defaults = {
  spread: 120,
  ticks: 30,
  gravity: 0,
  decay: 0.99,
  startVelocity: 50,
  shapes: ["star"],
};

//on hover, make fireworks!
 document.querySelectorAll('.awards').forEach(item => {
  item.addEventListener('mouseover', event => {
    console.log("confetti time");
  confetti({
    ...defaults,
    colors: sessionStorage.getItem("userColor"),
    particleCount: 20,
    scalar: 1.2,
    shapes: ["star"],
  });

  confetti({
    ...defaults,
    colors: sessionStorage.getItem("userColor"),
    particleCount: 10,
    scalar: 0.75,
    shapes: ["circle"],
  });
  })
});

let arrows = document.querySelector(".arrows");
let amIOn = false;

arrows.addEventListener("click", function(){
  let navMobile = document.querySelector(".navMobile");


  if (amIOn == false){
  navMobile.classList.add("show");
  arrows.innerHTML="↑↑↑";
  amIOn = true;
  } else if (amIOn == true){
  navMobile.classList.remove("show");
  arrows.innerHTML="↓↓↓";
  amIOn = false;
  }
  console.log(amIOn);
})




  