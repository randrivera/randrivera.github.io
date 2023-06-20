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

  document.addEventListener("click", function(){
    let randomColor = rbackground[Math.floor(Math.random()*rbackground.length)];
    console.log("clicked");
    sessionStorage.setItem("userColor", "#"+randomColor);
    r.style.setProperty('--my-variable', sessionStorage.getItem("userColor"));

  });

  let targetDiv = document.querySelector(".marquee");

  document.documentElement.setAttribute("data-theme", sessionStorage.getItem("userMode"));

  document.addEventListener("DOMContentLoaded", function(event) {
    let numberTest = parseInt(`${targetDiv.clientWidth}`);
    console.log(numberTest);
    r.style.setProperty('--div-length', numberTest + "px");

    let checkbox = document.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('change', function () {

      let currentTheme = document.documentElement.getAttribute("data-theme");
      // Switch between `dark` and `light`
      let switchToTheme = currentTheme === "dark" ? "light" : "dark";
      sessionStorage.setItem("userMode", switchToTheme);

      document.documentElement.setAttribute("data-theme", sessionStorage.getItem("userMode"));
    }
  )});

  window.addEventListener("resize", function(event){
    let numberTest = parseInt(`${targetDiv.clientWidth}`);
    console.log(numberTest);
    r.style.setProperty('--div-length', numberTest + "px");

  })





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
  