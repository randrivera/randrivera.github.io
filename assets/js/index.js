
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
    updatePupil();
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

let faces =[]
// colour of background and canvas
let backgroundColour = "#121212";
let pupilColor = getComputedStyle(document.documentElement).getPropertyValue('--my-variable');
console.log(pupilColor);

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  for(var i = 0; i < windowWidth/100 ; i++){
    for(var y = 0; y < windowHeight/100 ; y++){
      faces.push(new Face(i*150 + 90, y*150 + 90))
    }
  }
  
}

function draw() {
  background(backgroundColour);
  faces.forEach(face => {
    face.draw()
  })
  
}

function Face(x,y){
  this.x = x;
  this.y = y;
  this.blinkPause = random(500,4000)
  this.rightEye = new Eye(this.x + 20, y, this.blinkPause)
  this.leftEye = new Eye(this.x- 20, y, this.blinkPause)
  this.draw = function(){
    this.rightEye.draw()
    this.rightEye.blink()
    this.leftEye.draw()
    this.leftEye.blink()
    
  }
}


function Eye(x,y, binkPause){
  this.x = x;
  this.y = y;
  this.d = 35; // diameter of circle
  this.topLidY = this.y
  this.dy = 1;
  this.distance = 0;
  this.angle = 0;
  this.blinkPause = 0 // duration till next bink
  this.topLidYOrigin = this.y // original position before animation
  this.bottomLidY = this.y - this.d
  this.blink = function() {
    
    // decrement blink pause duration
    if(this.blinkPause > 0){
      this.blinkPause -= 1
      // return function to exit function early
      return
    }
    
      
    if(this.topLidY >= this.topLidYOrigin + this.d /2 ){
      this.blinkPause = binkPause
      this.dy = -this.dy
    }else if(this.topLidY < this.topLidYOrigin){
      this.dy = -this.dy
    }
    
    // animate eyelids
    this.topLidY += this.dy
    this.bottomLidY -= this.dy;
  },
    
  this.draw = function(){
    // eye ball
    noStroke()
    fill("white")
    circle(this.x,this.y, this.d)
    
    // pupil
    push();
    fill(pupilColor)
    // distance from mouse to eyeball center
    this.distance =   constrain(int(dist(this.x,this.y,mouseX,mouseY)), 0, 500)
    // map distance value from mouse position over eyeball radius
    this.eyePos = map(this.d /3 , 0,500,0,this.distance)
    this.angle = atan2(mouseY - this.y, mouseX - this.x);
    translate(this.x, this.y);
    rotate(this.angle);
    // circle( distance from eye center, offset from angle, circe diameter)
    circle(this.eyePos, 0, this.d / 2.5);
    pop();
  
    // eye lids
    fill(backgroundColour)
    // stroke("red") // for debugging
    rect(this.x - this.d/2, this.topLidY,  this.d, this.d)
    rect(this.x - this.d/2, this.bottomLidY,  this.d, this.d)
   
    // eyeliner
    noFill()
    strokeWeight(3)
    stroke("black")
    circle(this.x,this.y, this.d)
  }
}
  
  function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
  
  function updatePupil() {
    pupilColor = sessionStorage.getItem("userColor");
  }





  