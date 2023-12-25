//hello message in header
let hello = document.getElementById("hello");
let r = document.querySelector(':root');
//nameScreen
let nameInput = document.querySelector(".nameInput");
//enter button
let button = document.querySelector("#enterBtn");
  
//checks if a name is already stored and prevents the name popup if so
function checkStorage(){
  if (sessionStorage.getItem("userName")){
    hello.innerHTML = "Hi " + sessionStorage.getItem("userName") + "! ♥";
  } else {
    null
  };
}

window.onload = checkStorage();

r.style.setProperty('--my-variable', sessionStorage.getItem("userColor"));

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



//award fireworks code
const defaults = {
  spread: 120,
  ticks: 30,
  gravity: 0,
  decay: 0.99,
  startVelocity: 30,
  shapes: ["square"],
  move: {
    "direction": "bottom",
      "enable": true,
      "outModes": {
        "default": "out"
    }
  }
};

//on hover, make fireworks!
 document.querySelectorAll('.awards').forEach(item => {
  item.addEventListener('mouseover', event => {
    console.log("confetti time");
  confetti({
    ...defaults,
    colors: sessionStorage.getItem("userColor"),
    particleCount: 50,
    scalar: 1.2,
    // shapes: ["star"],
  });
  })
});

let arrows = document.querySelector(".arrows");
let amIOn = false;

arrows.addEventListener("click", function(){
  let navMobile = document.querySelector(".navMobile");
  let containerDiv = document.querySelector(".container");



  if (amIOn == false){
    navMobile.classList.add("show");
    containerDiv.classList.add("hide");
    arrows.innerHTML="–";
    amIOn = true;
    } else if (amIOn == true){
    navMobile.classList.remove("show");
    containerDiv.classList.remove("hide");
    arrows.innerHTML="+";
    amIOn = false;
    }
    console.log(amIOn);
})

// let amIOnDesktop = false;
// let morePlus = document.querySelector(".moreContent");


// morePlus.addEventListener("click", function(){
//   let extraContent = document.querySelector(".hiddenDIV");

//   if (amIOnDesktop == false){
//   extraContent.classList.add("show");
//   morePlus.innerHTML="–";
//   amIOnDesktop = true;
//   } else if (amIOnDesktop == true){
//   extraContent.classList.remove("show");
//   morePlus.innerHTML="+";
//   amIOnDesktop = false;
//   }
//   console.log(amIOnDesktop); 
// });

// let amIOnProject = false;
// let projMore = document.querySelector(".projMore");


// projMore.addEventListener("click", function(){
//   let projCredits = document.querySelector(".projCredits");

//   if (amIOnProject == false){
//   projCredits.classList.add("show");
//   projMore.innerHTML="–";
//   amIOnProject = true;
//   } else if (amIOnProject == true){
//   projCredits.classList.remove("show");
//   projMore.innerHTML="+";
//   amIOnProject = false;
//   }
//   console.log(amIOnProject); 
// })


