// ✅ Toggle preloader on page load
window.addEventListener('load', () => {
  document.getElementById('preloader').style.display = 'none';
});

// ✅ Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

// ✅ Animate Hero Title Words
const heroTitle = document.getElementById('heroTitle');
const splitWords = heroTitle.textContent.split(' ').map(word => `<span class="word">${word}</span>`);
heroTitle.innerHTML = splitWords.join(' ');

gsap.set(".word", { opacity: 0, y: 30 });

gsap.to(".word", {
  scrollTrigger: {
    trigger: heroTitle,
    start: "top 80%",
  },
  opacity: 1,
  y: 0,
  stagger: 0.08,
  duration: 0.8,
  ease: "power2.out"
});

// ✅ Scroll Fade In for Sections
document.querySelectorAll("section").forEach(section => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 90%",
    },
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: "power2.out"
  });
});
