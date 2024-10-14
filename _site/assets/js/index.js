//nameScreen
let nameInput = document.querySelector(".nameInput");
//enter button
let button = document.querySelector("#enterBtn");

//hello message in header
let hello = document.getElementById("hello");
let r = document.querySelector(':root');

r.style.setProperty('--my-variable', sessionStorage.getItem("userColor"));

// const mediaQuery = window.matchMedia('(min-width: 768px)')
// if (mediaQuery.matches){
//   //enter name interaction
//   button.addEventListener("click", function(){
//     //grab value from text input
//     let txt = document.querySelector("#collectName").value
//     //store value for userName
//     sessionStorage.setItem("userName", txt);

//     //change hello message name to have userName
//     hello.innerHTML = "Hi " + sessionStorage.getItem("userName") + "! ♥";

//     //hide nameScreen then display:none it afterwards so it does not interfere with other interactions
//     nameInput.style.opacity = "0";
//     setTimeout(function()
//       {nameInput.style.display = "none";
//       }, 1000);
//   });
//   function search(ele) {
//     if(event.key === 'Enter') {
//         //grab value from text input
//     let txt = document.querySelector("#collectName").value
//     //store value for userName
//     sessionStorage.setItem("userName", txt);

//     //change hello message name to have userName
//     hello.innerHTML = "Hi " + sessionStorage.getItem("userName") + "! ♥";

//     //hide nameScreen then display:none it afterwards so it does not interfere with other interactions
//     nameInput.style.opacity = "0";
//     setTimeout(function()
//       {nameInput.style.display = "none";
//       }, 1000);
//     }
//   };


//   //checks if a name is already stored and prevents the name popup if so
//   function checkStorage(){
//     if (sessionStorage.getItem("userName")){
//       hello.innerHTML = "Hi " + sessionStorage.getItem("userName") + "! ♥";
//       nameInput.style.display = "none";
//     } else {
//       null
//     };
//   } 
//   window.onload = checkStorage();
// };

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
    // updatePupil();
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
projects[9] = document.querySelector("#projten");
//hover projects

let thumbnails = [];
thumbnails[0] = document.querySelector("#thumbone");
thumbnails[1] = document.querySelector("#thumbtwo");
thumbnails[2] = document.querySelector("#thumbthree");
thumbnails[3] = document.querySelector("#thumbfour");
thumbnails[4] = document.querySelector("#thumbfive");
thumbnails[5] = document.querySelector("#thumbsix");
thumbnails[6] = document.querySelector("#thumbseven");
thumbnails[7] = document.querySelector("#thumbeight");
thumbnails[8] = document.querySelector("#thumbnine");
thumbnails[9] = document.querySelector("#thumbten");
// thumbnails[9] = document.querySelector("#thumbone");



// console.log("test");
for (let i=0; i<thumbnails.length; i++){
  thumbnails[i].addEventListener("mouseenter", function(){
    // console.log("start func()");

    // for (let i=0; i<thumbnails.length; i++){
    //   projects[i].style.opacity = "75%";
    // }
    // projects[i].style.opacity = "100%";
    projects[i].style.color = sessionStorage.getItem("userColor");
    console.log("done");
  });

  thumbnails[i].addEventListener("mouseleave", function(){
    // for (let i=0; i<thumbnails.length; i++){
    //   projects[i].style.opacity = "100%";
    // }
    projects[i].style.color = 'var(--text-color)';
  });
}

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
// })

// Christ (Chris Panicker - panicker.design) helped me with this one <3
  // On the homepage, hovering over the title moves the corresponding preview image to the top
  


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
