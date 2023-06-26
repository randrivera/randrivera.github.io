let hello = document.getElementById("hello");
let type = document.querySelector("#type-message")


  
  let r = document.querySelector(':root');
  let nameInput = document.querySelector(".nameInput");
  
  hello.innerHTML = "Hi " + sessionStorage.getItem("userName") + "! ♥";

//change color on every click!
let rbackground = [
  'F30909',
  'F37E09',
  '7EF309',
  '0931F3',
  'CB09F3', 
];

r.style.setProperty('--my-variable', sessionStorage.getItem("userColor"));


  document.addEventListener("click", function(){
    let randomColor = rbackground[Math.floor(Math.random()*rbackground.length)];
    console.log("clicked");
    sessionStorage.setItem("userColor", "#"+randomColor);
    r.style.setProperty('--my-variable', sessionStorage.getItem("userColor"));

  });

  let targetDiv = document.querySelector(".marquee");

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


  const defaults = {
    spread: 120,
    ticks: 30,
    gravity: 0,
    decay: 0.99,
    startVelocity: 50,
    shapes: ["star"],
  };
  
  
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
  })
  
  

