// ======================================
// ELEMENTS
// ======================================

const heart = document.getElementById("heart");
const body = document.body;
const particles = document.getElementById("particles");

// ======================================
// HEART CLICK
// ======================================

heart.addEventListener("click", () => {

    // Prevent multiple clicks
    heart.style.pointerEvents = "none";

    // Heart pop
    heart.animate([
        { transform: "translate(-50%, -50%) scale(1)" },
        { transform: "translate(-50%, -50%) scale(1.25)" },
        { transform: "translate(-50%, -50%) scale(0.9)" },
        { transform: "translate(-50%, -50%) scale(1)" }
    ], {
        duration: 400,
        easing: "ease-out"
    });

    // Open envelope after pop
    setTimeout(() => {
        body.classList.add("open");
    }, 350);

});

// ======================================
// FLOATING PARTICLES
// ======================================

function createParticle() {

    const p = document.createElement("div");

    p.style.position = "absolute";
    p.style.width = (Math.random() * 5 + 2) + "px";
    p.style.height = p.style.width;

    p.style.borderRadius = "50%";

    // Soft pink / white glow
    const colors = [
        "#ffffff",
        "#ffd7e8",
        "#ffeef5",
        "#ffd1dc"
    ];

    p.style.background =
        colors[Math.floor(Math.random() * colors.length)];

    p.style.boxShadow =
        "0 0 12px rgba(255,255,255,0.7)";

    p.style.left = Math.random() * window.innerWidth + "px";
    p.style.top = (window.innerHeight + 30) + "px";

    particles.appendChild(p);

    const duration = 10000 + Math.random() * 8000;
    const drift = (Math.random() - 0.5) * 200;

    p.animate([
        {
            transform: "translate(0px,0px)",
            opacity: 0
        },
        {
            opacity: 0.8,
            offset: 0.15
        },
        {
            transform: `translate(${drift}px,-${window.innerHeight + 200}px)`,
            opacity: 0
        }
    ], {
        duration,
        easing: "linear"
    });

    setTimeout(() => {
        p.remove();
    }, duration);

}

// ======================================
// KEEP PARTICLES COMING
// ======================================

for (let i = 0; i < 25; i++) {
    setTimeout(createParticle, i * 250);
}

setInterval(createParticle, 500);

// ======================================
// PARALLAX (LETTER ONLY)
// ======================================

const paper = document.querySelector(".paper");

document.addEventListener("mousemove", (e) => {

    if (!body.classList.contains("open")) return;

    const x = (e.clientX / window.innerWidth - 0.5) * 10;
    const y = (e.clientY / window.innerHeight - 0.5) * 10;

    paper.style.transform =
        `rotateY(${x}deg) rotateX(${-y}deg)`;

});

// Reset on mouse leave

document.addEventListener("mouseleave", () => {

    if (!paper) return;

    paper.style.transform = "rotateX(0deg) rotateY(0deg)";

});

// ===============================
// MEMORY PAGE
// ===============================

const memoriesBtn = document.getElementById("memories-btn");
const backBtn = document.getElementById("back-btn");

memoriesBtn.addEventListener("click", () => {

    document.body.classList.add("memories");

});

backBtn.addEventListener("click", () => {

    document.body.classList.remove("memories");

});