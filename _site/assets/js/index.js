//nameScreen
let nameInput = document.querySelector(".nameInput");
//enter button
let button = document.querySelector("#enterBtn");

//hello message in header
let hello = document.getElementById("hello");
let r = document.querySelector(':root');

// color duos pulled from photo reference, in order top-left → bottom-right
const colorDuos = [
  { bg: '#DEDAD0', text: '#121212', accent: '#E85520' },  // cream + black
  { bg: '#E85520', text: '#3D1200', accent: '#DEDAD0' },  // orange + dark brown
  { bg: '#6EC9A2', text: '#1B2040', accent: '#E85520' },  // teal + dark navy
  { bg: '#AEC028', text: '#1A3008', accent: '#F0C020' },  // light green + dark green
  { bg: '#E06878', text: '#8B1020', accent: '#F0C020' },  // pink + deep red
  { bg: '#F0C020', text: '#2A2820', accent: '#E06878' },  // yellow + dark warm gray
];

function applyDuo(duo) {
  r.style.setProperty('--my-variable',      duo.accent);
  r.style.setProperty('--background-color', duo.bg);
  r.style.setProperty('--text-color',       duo.text);
  sessionStorage.setItem("userBg",   duo.bg);
  sessionStorage.setItem("userText", duo.text);
}

// colorify toggle
const defaultBg   = '#121212';
const defaultText = '#f5f5f5';
let colorifyOn = sessionStorage.getItem("colorifyOn") === "true";
let duoIndex   = parseInt(sessionStorage.getItem("duoIndex") || "0");

function setDefault() {
  r.style.setProperty('--background-color', defaultBg);
  r.style.setProperty('--text-color',       defaultText);
  r.style.setProperty('--my-variable',      '#E85520');
}

// restore state on load
if (colorifyOn) {
  applyDuo(colorDuos[duoIndex]);
} else {
  setDefault();
}

document.addEventListener("DOMContentLoaded", function() {
  const checkbox = document.querySelector('input[type="checkbox"]');
  if (!checkbox) return;
  checkbox.checked = colorifyOn;
  checkbox.addEventListener('change', function() {
    colorifyOn = this.checked;
    sessionStorage.setItem("colorifyOn", colorifyOn);
    if (!colorifyOn) {
      setDefault();
    } else {
      applyDuo(colorDuos[duoIndex]);
    }
  });
});

// every click steps to the next duo in order (only when colorify is on)
document.addEventListener("click", function() {
  if (!colorifyOn) return;
  duoIndex = (duoIndex + 1) % colorDuos.length;
  sessionStorage.setItem("duoIndex", duoIndex);
  applyDuo(colorDuos[duoIndex]);
});
  

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

//

// console.log("test");
for (let i=0; i<thumbnails.length; i++){
  if (!thumbnails[i] || !projects[i]) continue;
  thumbnails[i].addEventListener("mouseenter", function(){
    projects[i].style.color = 'var(--my-variable)';
  });
  thumbnails[i].addEventListener("mouseleave", function(){
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
    if (!projects[i]) continue;
    projects[i].addEventListener("mouseenter", function(){
      target.style.top = `-${targetImg.clientHeight*i}` - `-${scroller.scrollTop}` + "px";
    });
  }

// staggered nav project entrance
document.querySelectorAll(".Nav .project").forEach((el, i) => {
  el.style.animationDelay = (i * 60) + "ms";
});

// staggered preview image entrance
document.querySelectorAll(".previews > a").forEach((el, i) => {
  el.style.animationDelay = (i * 60) + "ms";
});

// slide-in panel for all internal project links
const contentArea = document.querySelector(".Content");
const containerArea = document.querySelector(".container");
const navArea = document.querySelector(".Nav");
const previews = document.querySelector(".previews");
let activePanel = null;

// scroll jack: natural scroll, eased snap to nearest preview when scroll settles
const previewLinks = [...document.querySelectorAll(".previews > a")];
if (previewLinks.length && contentArea) {
  let snapTimer = null;
  let snapRaf = null;

  function easeInOutExpo(t) {
    if (t === 0) return 0;
    if (t === 1) return 1;
    if (t < 0.5) return Math.pow(2, 20 * t - 10) / 2;
    return (2 - Math.pow(2, -20 * t + 10)) / 2;
  }

  function smoothScrollTo(target, duration) {
    cancelAnimationFrame(snapRaf);
    const start = contentArea.scrollTop;
    const dist = target - start;
    const startTime = performance.now();
    function step(now) {
      const elapsed = now - startTime;
      const t = Math.min(elapsed / duration, 1);
      contentArea.scrollTop = start + dist * easeInOutExpo(t);
      if (t < 1) snapRaf = requestAnimationFrame(step);
    }
    snapRaf = requestAnimationFrame(step);
  }

  contentArea.addEventListener("scroll", function() {
    if (activePanel) return;
    if (snapRaf) return; // don't re-trigger while snapping
    clearTimeout(snapTimer);
    snapTimer = setTimeout(() => {
      const scrollTop = contentArea.scrollTop;
      const containerTop = contentArea.getBoundingClientRect().top;
      let closest = 0;
      let minDist = Infinity;
      previewLinks.forEach((el, i) => {
        const elTop = el.getBoundingClientRect().top - containerTop + scrollTop;
        const dist = Math.abs(elTop - scrollTop);
        if (dist < minDist) { minDist = dist; closest = i; }
      });
      if (minDist > 30) {
        const targetTop = previewLinks[closest].getBoundingClientRect().top - containerTop + scrollTop;
        smoothScrollTo(targetTop, 1100);
        setTimeout(() => { snapRaf = null; }, 1150);
      }
    }, 250);
  });
}

function closePanel() {
  if (!activePanel) return;
  const panelToClose = activePanel;
  activePanel = null;
  panelToClose.classList.add("closing");
  if (previews) {
    previews.classList.remove("exiting");
    previews.style.opacity = "";
    previews.style.transition = "";
  }
  if (navArea) navArea.style.opacity = "";
  if (panelToClose._positionPanel) window.removeEventListener("resize", panelToClose._positionPanel);
  panelToClose.addEventListener("transitionend", () => {
    if (panelToClose.parentNode) panelToClose.parentNode.removeChild(panelToClose);
    if (contentArea) contentArea.scrollTop = 0;
  }, { once: true });
}

function loadProjectCSS() {
  if (!document.querySelector('link[href="/assets/css/project.css"]')) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/assets/css/project.css";
    document.head.appendChild(link);
  }
  if (!document.querySelector('link[href="/assets/css/project-editorial.css"]')) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/assets/css/project-editorial.css";
    document.head.appendChild(link);
  }
}

if (contentArea) {
  document.querySelectorAll(".Nav .Projects a[href^='/projects/'], .previews a[href^='/projects/']").forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      if (activePanel) closePanel();
      loadProjectCSS();

      const projUrl = this.getAttribute("href");
      fetch(projUrl)
        .then(res => res.text())
        .then(html => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, "text/html");
          const projContent = doc.querySelector(".Content").innerHTML;
          const bodyScripts = [...doc.querySelectorAll("body script")];

          const panel = document.createElement("div");
          panel.classList.add("project-panel");
          panel.innerHTML = `<span class="back-btn">← Back</span>` + projContent;

          function positionPanel() {
            const rect = contentArea.getBoundingClientRect();
            panel.style.top = rect.top + "px";
            panel.style.left = rect.left + "px";
            panel.style.width = rect.width + "px";
            panel.style.height = rect.height + "px";
          }

          positionPanel();
          document.body.appendChild(panel);
          activePanel = panel;

          panel._positionPanel = positionPanel;
          window.addEventListener("resize", positionPanel);

          // patch nextprev script: window.location.pathname is / in panel context, so inject the real path
          const fetchedPath = "/projects/" + projUrl.split("/projects/")[1];

          // give this panel's gallery a unique ID so scripts target the right one
          const galleryEl = panel.querySelector("#gallery");
          const galleryId = "gallery-" + Date.now();
          if (galleryEl) galleryEl.id = galleryId;

          bodyScripts.forEach(old => {
            const s = document.createElement("script");
            if (old.src) {
              s.src = old.src;
            } else {
              // wrap in IIFE + scope gallery selector to this panel's unique ID
              const scoped = old.textContent
                .replace(/document\.querySelector\(["']#gallery["']\)/g, `document.querySelector("#${galleryId}")`)
                .replace(/window\.location\.pathname/g, `"${fetchedPath}"`);
              s.textContent = `(function() { ${scoped} })();`;
            }
            panel.appendChild(s);
          });

          // fade previews first, then slide panel in with slight overlap
          if (previews) previews.classList.add("exiting");
          if (navArea) {
            navArea.style.transition = "opacity 0.6s ease";
            navArea.style.opacity = "0.3";
          }
          panel.getBoundingClientRect();
          setTimeout(() => {
            panel.classList.add("active");
          }, 60);

          panel.querySelector(".back-btn").addEventListener("click", closePanel);

          const backBtn = panel.querySelector(".back-btn");
          panel.addEventListener("scroll", function() {
            const atBottom = panel.scrollTop + panel.clientHeight >= panel.scrollHeight - 40;
            if (backBtn) backBtn.style.color = atBottom ? 'var(--my-variable)' : '';
          });
        });
    });
  });
}
