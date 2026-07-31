// ==============================
// ELEMENTS
// ==============================

const bouquet = document.getElementById("bouquet");
const title = document.getElementById("title");
const message = document.getElementById("message");
const particles = document.getElementById("particles");

// ==============================
// CREATE FLOATING PARTICLES
// ==============================

function createParticle() {

    const p = document.createElement("div");

    p.className = "sparkle";

    const size = Math.random() * 4 + 2;

    p.style.width = size + "px";
    p.style.height = size + "px";

    p.style.left = Math.random() * 100 + "vw";
    p.style.bottom = "-10px";

    p.style.animationDuration =
        (8 + Math.random() * 8) + "s";

    p.style.animationDelay =
        Math.random() * 5 + "s";

    p.style.opacity = Math.random() * .5;

    particles.appendChild(p);

}

for(let i=0;i<45;i++){

    createParticle();

}

// ==============================
// TIMELINE
// ==============================

window.addEventListener("load",()=>{

    // bouquet

    setTimeout(()=>{

        bouquet.classList.add("show-bouquet");

    },600);

    // title

    setTimeout(()=>{

        title.classList.add("show-title");

    },2800);

    // message

    setTimeout(()=>{

        message.classList.add("show-message");

    },4200);

});

// ==============================
// PARALLAX
// ==============================

document.addEventListener("mousemove",(e)=>{

    const x =
        (e.clientX/window.innerWidth)-0.5;

    const y =
        (e.clientY/window.innerHeight)-0.5;

    bouquet.style.transform =
        `translate(${x*12}px,${y*12}px)`;

});

// ==============================
// MOBILE
// ==============================

if(window.innerWidth < 768){

    document.removeEventListener("mousemove",()=>{});

}