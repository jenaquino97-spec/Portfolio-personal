const header = document.getElementById("header");
const mobileMenu = document.getElementById("mobileMenu");
const menuToggle = document.getElementById("menuToggle");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 10);
});

menuToggle.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("open");
  menuToggle.innerHTML = isOpen
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';
});

mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
  });
});

const typed = document.getElementById("typed");
const word = "Web Developer";
let index = 0;
let deleting = false;

function type() {
  typed.textContent = word.slice(0, index);

  if (!deleting && index < word.length) {
    index++;
    setTimeout(type, 70);
  } else if (!deleting) {
    deleting = true;
    setTimeout(type, 2000);
  } else if (index > 0) {
    index--;
    setTimeout(type, 40);
  } else {
    deleting = false;
    setTimeout(type, 800);
  }
}
type();

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

const navLinks = document.querySelectorAll(".nav-links a");
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.toggle("active", link.dataset.section === entry.target.id);
        });
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);
document.querySelectorAll("section[id]").forEach((s) => sectionObserver.observe(s));

document.getElementById("year").textContent = new Date().getFullYear();