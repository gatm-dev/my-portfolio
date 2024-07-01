const particlesContainer = document.getElementById("header");

let mouseX = 0;
let mouseY = 0;

let scrollX = 0;
let scrollY = 0;

const particlesAnimation = (el, x, y) => {
  const particleCount = 100;
  const cometCount = particleCount / 2;
  const particleSpeed = 2;
  const particleSize = 0.5;

  function createParticle() {
    const particle = document.createElement("div");

    particle.classList.add("particle", "ghost");
    particle.style.position = "absolute";
    particle.style.borderRadius = "50%";
    particle.style.width = `${particleSize}rem`;
    particle.style.height = `${particleSize}rem`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.opacity = `${Math.random()}`;
    particle.style.backgroundColor =
      Math.random() > 0.5 ? "#28c0c2" : "#d94949";

    el.appendChild(particle);

    anime({
      targets: particle,
      translateX: `${x + (particleSpeed - (Math.random() - 0.5))}%`,
      translateY: `${y + (particleSpeed - (Math.random() - 0.5))}%`,
      scale: [1, 0],
      opacity: [1, 0],
      easing: "easeOutExpo",
      duration: 10000,
      complete: (anim) => el.removeChild(particle),
    });
  }

  function createComet() {
    const particle = document.createElement("div");

    particle.classList.add("particle", "ghost");
    particle.style.position = "absolute";
    particle.style.borderRadius = "50%";
    particle.style.width = `${particleSize}rem`;
    particle.style.height = `${particleSize}rem`;
    particle.style.left = `50%`;
    particle.style.top = `calc(50% * ${y}px)`;
    particle.style.opacity = `${Math.random()}`;
    particle.style.backgroundColor = "rgba(255, 255, 255, 0.1)";

    el.appendChild(particle);

    anime({
      targets: particle,
      translateX: `${el.offsetWidth / 2 + x}px`,
      scale: [0, Math.random() * 2],
      opacity: [0, Math.random() * 0.5 + 0.5],
      easing: "easeOutExpo",
      duration: 10000,
      complete: (anim) => el.removeChild(particle),
    });
  }

  for (let i = 0; i < particleCount; i++) createParticle();
  for (let i = 0; i < cometCount; i++) createComet();
  setInterval(createParticle, 250);
  setInterval(createComet, 500);
};

window.onload = () => {
  const containerHeight = particlesContainer.offsetHeight;

  this.addEventListener("mousemove", (e) => {
    mouseX = e.pageX;
    mouseY = e.pageY;
  });

  this.addEventListener("scroll", () => {
    scrollX = window.scrollX;
    scrollY = window.scrollY;
  });

  particlesAnimation(particlesContainer, mouseX, mouseY);
};
