const container = document.getElementById("particles");

for (let i = 0; i < 30; i++) {
    const particle = document.createElement("span");
    particle.classList.add("particle");

    particle.style.left = Math.random() * 100 + "vw";
    particle.style.animationDuration = (10 + Math.random() * 20) + "s";
    particle.style.animationDelay = Math.random() * 5 + "s";

    container.appendChild(particle);
}


